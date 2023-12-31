using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class AppDataContext : DbContext
{
      public AppDataContext(DbContextOptions<AppDataContext> options) : base(options) 
      {
            Usuarios = Set<Usuario>();
            Imcs = Set<Imc>();
      }
      
      public DbSet<Usuario> Usuarios { get; set; }
      public DbSet<Imc> Imcs { get; set; }

   
}
