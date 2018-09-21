using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BTLMISA.Models
{
    public class Employee
    {
        private string _EmployeeCode;
        private string _EmployeeName;
        private int _Gender;
        private string _DateOfBirth;
        private string _LeverTraining;
        private string _AddressTraining;
        private string _Major;
        private string _JobPosition;
        private string _WorkUnit;
        private string _DateTrial;
        private string _DateOfficial;
        private string _CMT;
        private string _Passport;

        public Employee()
        {

        }

        public Employee(string EmployeeCode, string EmployeeName, int Gender, string DateOfBirth, string LeverTraining, string AddressTraining, string Major, string JobPosition, string WorkUnit, string DateTrial, string DateOfficial, string CMT, string Passport)
        {
            this.EmployeeCode = EmployeeCode;
            this.EmployeeName = EmployeeName;
            this.Gender = Gender;
            this.DateOfBirth = DateOfBirth;
            this.LeverTraining = LeverTraining;
            this.AddressTraining = AddressTraining;
            this.Major = Major;
            this.JobPosition = JobPosition;
            this.WorkUnit = WorkUnit;
            this.DateTrial = DateTrial;
            this.DateOfficial = DateOfficial;
            this.CMT = CMT;
            this.Passport = Passport;
        }

        public string EmployeeCode { get => _EmployeeCode; set => _EmployeeCode = value; }
        public string EmployeeName { get => _EmployeeName; set => _EmployeeName = value; }
        public int Gender { get => _Gender; set => _Gender = value; }
        public string DateOfBirth { get => _DateOfBirth; set => _DateOfBirth = value; }
        public string LeverTraining { get => _LeverTraining; set => _LeverTraining = value; }
        public string AddressTraining { get => _AddressTraining; set => _AddressTraining = value; }
        public string Major { get => _Major; set => _Major = value; }
        public string JobPosition { get => _JobPosition; set => _JobPosition = value; }
        public string WorkUnit { get => _WorkUnit; set => _WorkUnit = value; }
        public string DateTrial { get => _DateTrial; set => _DateTrial = value; }
        public string DateOfficial { get => _DateOfficial; set => _DateOfficial = value; }
        public string CMT { get => _CMT; set => _CMT = value; }
        public string Passport { get => _Passport; set => _Passport = value; }
    }
}