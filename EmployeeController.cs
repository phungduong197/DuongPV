using BTLMISA.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Configuration;
using System.Globalization;

namespace BTLMISA.Controllers
{
    public class EmployeeController : ApiController
    {
        // GET: api/Employee
        public IEnumerable<Employee> Get ( )
        {
            List<Employee> _employees = new List<Employee>();
            using(SqlConnection _connection = new SqlConnection (ConfigurationManager.ConnectionStrings["ConnectString"].ConnectionString))
            {
                _connection.Open ();
                if(_connection.State == System.Data.ConnectionState.Open)
                {
                    SqlCommand _command = new SqlCommand();
                    _command.Connection = _connection;
                    _command.CommandType = System.Data.CommandType.Text;
                    _command.CommandText = @"SELECT * FROM Employee";
                    try
                    {
                        SqlDataReader _reader = _command.ExecuteReader();
                        if(_reader.HasRows)
                        {
                            while(_reader.Read ())
                            {
                                Employee item = new Employee();
                                item.EmployeeCode = _reader["EmployeeCode"].ToString ();
                                item.EmployeeName = _reader["EmployeeName"].ToString ();
                                item.Gender = Int32.Parse (_reader["Gender"].ToString ());
                                item.DateOfBirth = _reader["DateOfBirth"].ToString ();
                                item.LeverTraining = _reader["LeverTraining"].ToString ();
                                item.AddressTraining = _reader["AddressTraining"].ToString ();
                                item.Major = _reader["Major"].ToString ();
                                item.JobPosition = _reader["JobPosition"].ToString ();
                                item.WorkUnit = _reader["WorkUnit"].ToString ();
                                item.DateTrial = _reader["DateTrial"].ToString ();
                                item.DateOfficial = _reader["DateOfficial"].ToString ();
                                item.CMT = _reader["CMT"].ToString ();
                                item.Passport = _reader["Passport"].ToString ();
                                _employees.Add (item);
                            }
                        }
                    }
                    catch(Exception ex)
                    {
                        Console.Write (ex.Message);
                    }
                }
            }
            return _employees;
        }

        // GET: api/Employee/5
        public int Get ( string id )
        {
            string query = "select EmployeeCode from Employee where EmployeeCode = '"+ id +"'";
            return DataProvider.Instace.ExecuteNonQuery(query);
        }

        // POST: api/Employee
        public int Post ( [FromBody]List<string> value )
        {
            Employee employee = new Employee(value);
            DateTime date = DateTime.ParseExact(employee.DateOfBirth,"dd/MM/yyyy",System.Globalization.CultureInfo.InvariantCulture);
            string query = "exec insertEmployees" + " '" + employee.EmployeeCode + "', " + "N'" + employee.EmployeeName  + "', " + "N'"+ employee.Gender + "', " + "'" + date.Month +"/"+ date.Day +"/"+ date.Year + "', " + "N'"
            + employee.JobPosition + "', " + "N'" + employee.WorkUnit + "'";
            int i = DataProvider.Instace.ExecuteNonQuery (query);
            return i;
        }

        // PUT: api/Employee/5
        public void Put ( int id,[FromBody]string value )
        {
        }

        // DELETE: api/Employee/5
        public void Delete ( int id )
        {
        }
    }
}
