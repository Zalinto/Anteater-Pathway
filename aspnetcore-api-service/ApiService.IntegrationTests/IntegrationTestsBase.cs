using System;
using System.Threading.Tasks;
using ApiService.CourseSearch.Models;
using ApiService.DataAccess;
using ApiService.DataAccess.Repositories;
using ApiService.Models;
using ApiService.SystemConfiguration;
using Mongo2Go;
using Xunit;

namespace ApiService.IntegrationTests
{
    public class IntegrationTestsBase : IDisposable
    {
        private MongoDbRunner _runner;
        protected readonly ICourseRepository _courseRepository;
        protected MongoDbContext DbContext { get; set; }

        public IntegrationTestsBase()
        {
            SetupMongo2Go();
            _courseRepository = new CourseRepository(DbContext);
        }
        
        public void Dispose()
        {
            _runner.Dispose();
        }

        protected void SetupMongo2Go()
        {
            _runner = MongoDbRunner.Start();

            var settings = new MongoDbSettings()
            {
                ConnectionString = _runner.ConnectionString,
                DatabaseName = "TestDB"
                
                // ConnectionString = "mongodb://localhost:27017",
                // DatabaseName = "AnteaterPathwayDB"
            };

            DbContext = new MongoDbContext(settings);
        }

        protected async Task AddSingleCourseItemToMongoDb(string department, string number)
        {
            var course = new Course()
            {
                DepartmentCode = department,
                Number = number
            };

            await _courseRepository.Add(course);
        }
        
        protected async Task AddTestCourseItemsToMongoDb(int amount = 1)
        {
            for (int i = 0; i < amount; i++)
            {
                var course = new Course()
                {
                    DepartmentCode = "COMPSCI",
                    Number = $"{i + 1}",
                    Title = $"Intro to CompSci {i+1}",
                    Unit = "4",
                    Description = "This course is part of CS introductory series."
                };
                
                await _courseRepository.Add(course);
            }
        }
    }
}