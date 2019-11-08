using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;

namespace Api.Models
{
    public class MongoDBContext : IMongoDBContext
    {
        private IMongoDatabase _database;
        public MongoDBContext(IDatabaseSettings settings) {
            var client = new MongoClient(settings.ConnectionString);
            _database = client.GetDatabase(settings.DatabaseName);
        }


        public IMongoDatabase Database() {
            return _database;
        }
        
    }

    public interface IMongoDBContext
    {
        IMongoDatabase Database();
        
    }
}

