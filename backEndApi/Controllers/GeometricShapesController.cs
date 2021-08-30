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
    public class GeometricShapesController : ControllerBase
    {
        private readonly DataContext _context;

        public GeometricShapesController(DataContext context)
        {
            _context = context;
        }
        [HttpGet("geo")]
        public async Task<ActionResult<List<GeometricShapes>>> Get()
        {
            var Formas = await _context.formasGeometricas.ToListAsync();
            return Formas;
        }
        [HttpGet("geo/{id}")]
        public async Task<ActionResult<GeometricShapes>> GetbyId(String id)
        {
            var Formas = await _context.formasGeometricas.AsNoTracking().FirstOrDefaultAsync(x => x.idFormasGeometricas == id);
            return Formas;
        }

        [HttpGet("directory/{id}")]
        public async Task<ActionResult<List<GeometricShapes>>> GetbyDirectorie(string id)
        {
            var Formas = await _context.formasGeometricas.AsNoTracking().Where(x => x.id_diretorio == id).ToListAsync();
            return Formas;
        }

        [HttpPost("newGeo")]
        public async Task<ActionResult<GeometricShapes>> Post([FromBody] GeometricShapes model)
        {
            model.idFormasGeometricas = Guid.NewGuid().ToString();

            if (ModelState.IsValid)
            {
                _context.formasGeometricas.Add(model);
                
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