
using lum.db.model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace lum.web.api
{
    public class LumDataContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public LumDataContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to postgres with connection string from app settings
            options.UseNpgsql(Configuration.GetConnectionString("WebApiDatabase"));
        }

        public DbSet<ContactPerson> ContactPersons { get; set; }
    }
}
