using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using backend.Models;

namespace backend.Data
{
    public partial class DataContext : DbContext
    {
        public DataContext()
        {
        }

        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }

        public virtual DbSet<BayData> BayData { get; set; }
        public virtual DbSet<CostPriceGas> CostPriceGas { get; set; }
        public virtual DbSet<CustomerInfo> CustomerInfo { get; set; }
        public virtual DbSet<ExitGateData> ExitGateData { get; set; }
        public virtual DbSet<Gas> Gas { get; set; }
        public virtual DbSet<InboundWbdata> InboundWbdata { get; set; }
        public virtual DbSet<OutboundWbdata> OutboundWbdata { get; set; }
        public virtual DbSet<Popaper> Popaper { get; set; }
        public virtual DbSet<SaleOfficeData> SaleOfficeData { get; set; }
        public virtual DbSet<TagValue> TagValue { get; set; }
        public virtual DbSet<Transactions> Transactions { get; set; }
        public virtual DbSet<Truck> Truck { get; set; }
        public virtual DbSet<User> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=localhost,1433; Database=WorkshopDB;User=sa;Password=maxauto4008");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BayData>(entity =>
            {
                entity.HasKey(e => e.ServiceId);

                entity.Property(e => e.ServiceId)
                    .HasColumnName("Service_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.Bay)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.DateIn)
                    .HasColumnName("Date_In")
                    .HasColumnType("date");

                entity.Property(e => e.DateOut)
                    .HasColumnName("Date_Out")
                    .HasColumnType("date");

                entity.Property(e => e.PoNo)
                    .IsRequired()
                    .HasColumnName("PO_no")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ServiceTime).HasColumnName("Service_Time");

                entity.Property(e => e.TimeIn).HasColumnName("Time_In");

                entity.Property(e => e.TimeOut).HasColumnName("Time_Out");
            });

            modelBuilder.Entity<CostPriceGas>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.GasId)
                    .IsRequired()
                    .HasColumnName("Gas_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.GasPriceId)
                    .IsRequired()
                    .HasColumnName("Gas_Price_ID")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<CustomerInfo>(entity =>
            {
                entity.HasKey(e => e.CustomerId);

                entity.Property(e => e.CustomerId)
                    .HasColumnName("Customer_ID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.PhoneNo)
                    .IsRequired()
                    .HasColumnName("Phone_no")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TaxPayerId)
                    .IsRequired()
                    .HasColumnName("Tax_payer_ID")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ExitGateData>(entity =>
            {
                entity.HasKey(e => e.ServiceId);

                entity.Property(e => e.ServiceId)
                    .HasColumnName("Service_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.DateIn)
                    .HasColumnName("Date_In")
                    .HasColumnType("date");

                entity.Property(e => e.PoNo)
                    .IsRequired()
                    .HasColumnName("PO_no")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TimeIn).HasColumnName("Time_In");
            });

            modelBuilder.Entity<Gas>(entity =>
            {
                entity.Property(e => e.GasId)
                    .HasColumnName("Gas_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.GasType)
                    .IsRequired()
                    .HasColumnName("Gas_Type")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<InboundWbdata>(entity =>
            {
                entity.HasKey(e => e.ServiceId);

                entity.ToTable("InboundWBData");

                entity.Property(e => e.ServiceId)
                    .HasColumnName("Service_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.DateIn)
                    .HasColumnName("Date_In")
                    .HasColumnType("date");

                entity.Property(e => e.DateOut)
                    .HasColumnName("Date_Out")
                    .HasColumnType("date");

                entity.Property(e => e.PoNo)
                    .IsRequired()
                    .HasColumnName("PO_no")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ServiceTime).HasColumnName("Service_Time");

                entity.Property(e => e.TimeIn).HasColumnName("Time_In");

                entity.Property(e => e.TimeOut).HasColumnName("Time_Out");
            });

            modelBuilder.Entity<OutboundWbdata>(entity =>
            {
                entity.HasKey(e => e.ServiceId);

                entity.ToTable("OutboundWBData");

                entity.Property(e => e.ServiceId)
                    .HasColumnName("Service_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.DateIn)
                    .HasColumnName("Date_In")
                    .HasColumnType("date");

                entity.Property(e => e.DateOut)
                    .HasColumnName("Date_Out")
                    .HasColumnType("date");

                entity.Property(e => e.PoNo)
                    .IsRequired()
                    .HasColumnName("PO_no")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ServiceTime).HasColumnName("Service_Time");

                entity.Property(e => e.TimeIn).HasColumnName("Time_In");

                entity.Property(e => e.TimeOut).HasColumnName("Time_Out");
            });

            modelBuilder.Entity<Popaper>(entity =>
            {
                entity.HasKey(e => e.PoNo);

                entity.ToTable("POPaper");

                entity.Property(e => e.PoNo)
                    .HasColumnName("PO_no")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerId)
                    .IsRequired()
                    .HasColumnName("Customer_ID")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.InvoiceNo)
                    .IsRequired()
                    .HasColumnName("Invoice_no")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Item)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.PaymentNo)
                    .IsRequired()
                    .HasColumnName("Payment_no")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TruckId)
                    .IsRequired()
                    .HasColumnName("Truck_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.UnitPriceId)
                    .HasColumnName("Unit_Price_ID")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<SaleOfficeData>(entity =>
            {
                entity.HasKey(e => e.ServiceId);

                entity.Property(e => e.ServiceId)
                    .HasColumnName("Service_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.DateIn)
                    .HasColumnName("Date_In")
                    .HasColumnType("date");

                entity.Property(e => e.DateOut)
                    .HasColumnName("Date_Out")
                    .HasColumnType("date");

                entity.Property(e => e.PoNo)
                    .IsRequired()
                    .HasColumnName("PO_no")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ServiceTime).HasColumnName("Service_Time");

                entity.Property(e => e.TimeIn).HasColumnName("Time_In");

                entity.Property(e => e.TimeOut).HasColumnName("Time_Out");
            });

            modelBuilder.Entity<Transactions>(entity =>
            {
                entity.HasKey(e => e.TransactionId);

                entity.Property(e => e.TransactionId)
                    .HasColumnName("Transaction_ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.Description).HasMaxLength(250);

                entity.Property(e => e.PoNo)
                    .HasColumnName("PO_no")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RefNo)
                    .IsRequired()
                    .HasColumnName("Ref_no")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Truck>(entity =>
            {
                entity.Property(e => e.TruckId)
                    .HasColumnName("Truck_ID")
                    .HasMaxLength(50);

                entity.Property(e => e.TruckDriverName)
                    .IsRequired()
                    .HasColumnName("TruckDriver_Name")
                    .HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
