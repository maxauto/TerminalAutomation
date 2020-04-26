using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace backend.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api")]
    public class WeatherForecastController : ControllerBase
    {

        private readonly DataContext _context;
        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger,DataContext context)
        {
            _context = context;
            _logger = logger;
        }
        #region  MSSQL database
        [HttpGet("getdata")]
        public async Task<IActionResult> GetData()
        {
            try
            {
                var tagValueDatas = await _context.TagValue.ToListAsync();
                return Ok(tagValueDatas);
            }
            catch (Exception ex)
            {

                return NotFound( new{result=ex, message="fail"});
            }

        }
        [AllowAnonymous]
        [HttpGet("{id}")]

        public async Task<IActionResult> GetDataByID(int id)
        {
            try
            {
                var tagValueData = await _context.TagValue.FirstOrDefaultAsync(data => data.Id ==id);
                return Ok(new{result=tagValueData, message="success"});
            }
            catch (Exception ex)
            {
                
                return NotFound( new{result=ex, message="fail"});
            }
        }

        [HttpPut("updatedata")]
        public async Task<IActionResult> UpdateData(TagValue result)
        {
            try
            {
                var results =  await _context.TagValue.SingleOrDefaultAsync(data => data.Id == result.Id);
                if(result != null)
                {
                    // update value
                    results.Value = result.Value;
                    results.Tagname = result.Tagname;

                    _context.Update(results);
                    _context.SaveChanges();
                }
                return Ok( new{result=result, message="sucess"});
            }
            catch (Exception ex)
            {
                return NotFound( new{result=ex, message="fail"});
            }
        }
        #endregion

    }
}
