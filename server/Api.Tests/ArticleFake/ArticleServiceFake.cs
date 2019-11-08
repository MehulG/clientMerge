using Api.Models;
using Api.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MongoDB.Driver;
using MongoDB.Bson;


namespace Api.Tests
{
    public class ArticleFake : IArticleService
    {
        private readonly List<Article> _Article;

        public ArticleFake()
        {
            _Article = new List<Article>()
            {
                new Article(){
                    Id="123", Title="MehulG", Tags= new List<string>(){"Angular", "C#"}, Content= "This is good" },
                new Article(){
                    Id="1234", Title="MehulGG", Tags=new List<string>(){"C#"}, Content= "This is goodd" },
                new Article(){
                    Id="12345", Title="MehulGGG", Tags=new List<string>(){"java"}, Content= "This is gooddd" },
                new Article(){
                    Id="123456", Title="MehulGGGG", Tags=new List<string>(){"Angular"}, Content= "This is goodddd" },

            };
        }

        public List<Article> Get()
        {
            return _Article;
        }

        public Article Get(string id)
        {
            return _Article.Where(a => a.Id == id)
           .FirstOrDefault();
        }
        public Article Create(Article newItem)
        {
            newItem.Id = "134527282";
            _Article.Add(newItem);
            return newItem;
        }
        public void Update(string id, Article bookIn)
        {

        }
         public  List<Article> FilterByTags(List<string> tags)
         {
          return (_Article.Find(x => x.Tags.Contains("Angular"))).ToList();
         }
         public  List<Article> SearchArticle(string title)
         {  
            return _Article.Find(x => x.Title.Contains("MehulG")).ToList();
         }  
        public void Remove(string id)
        {

        }

    }
}