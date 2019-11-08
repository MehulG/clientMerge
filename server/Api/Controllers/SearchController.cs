using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Api.Models;
using Api.Services;
namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly IArticleService _service;


        public SearchController(IArticleService service)
        {
            _service = service;

        }


        [HttpGet()]
        public ActionResult<List<Article>> Get([FromQuery] string title)
        {
            var entities = _service.SearchArticle(title);

            if (entities == null)
            {
                return NotFound();
            }

            return entities;//dfsdfsdfsdf
        }

        [HttpGet("articles/user/{userId}")]
        
            public ActionResult<List<Article>> GetByUserId(string userId){
                var entities = _service.SearchArticleByUserId(userId);
               
            if (entities == null)
            {
                return NotFound();
            }

            return entities;
            }
        }
    }
