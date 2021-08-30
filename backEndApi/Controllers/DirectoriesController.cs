using backEndAPi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using backEndAPi.Data;
using System;

namespace backEndAPi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DirectoriesController : ControllerBase
    {
        private readonly DataContext _context;

        public DirectoriesController(DataContext context)
        {
            _context = context;
        }
        [HttpGet("dir")]
        public async Task<ActionResult<List<Directories>>> Get()
        {
            var Diretorios = await _context.diretorios.ToListAsync();
            return Diretorios;
        }

        [HttpPost("newDirectory")]
        public async Task<ActionResult<Directories>> Post([FromBody] Directories model)
        {
            model.idDiretorio = Guid.NewGuid().ToString();
            if (ModelState.IsValid)
            {
                _context.diretorios.Add(model);
                await _context.SaveChangesAsync();
                return model;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}