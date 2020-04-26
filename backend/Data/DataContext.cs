using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data

{
    public partial class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
        : base(options) {}

        public DbSet<TagValue> TagValue { get; set; }
        public DbSet<User> User { get; set; }
    }
}