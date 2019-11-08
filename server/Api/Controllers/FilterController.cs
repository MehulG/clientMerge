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
    public class FilterController : ControllerBase
    {
        private readonly IArticleService _service;


        public FilterController(IArticleService service)
        {
            _service = service;

        }


        [HttpGet()]
        public ActionResult<List<Article>> Get([FromQuery] List<string> tags)
        {
            var entities = _service.FilterByTags(tags);

            if (entities == null)
            {
                return NotFound();
            }

            return entities;//dfsdfsdfsdf
        }
    }
}