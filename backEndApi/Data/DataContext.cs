using Microsoft.EntityFrameworkCore;
using backEndAPi.Models;


namespace backEndAPi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }

        public DbSet<Directories> diretorios { get; set; }
        public DbSet<GeometricShapes> formasGeometricas { get; set; }
    }


}