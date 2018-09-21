using BTLMISA.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Configuration;

namespace BTLMISA.Controllers
{
    public class EmployeeController : ApiController
    {
        // GET: api/Employee
        public IEnumerable<Employee> Get()
        {
            List<Employee> _employees = new List<Employee>();
            using (SqlConnection _connection = new SqlConnection(ConfigurationManager.ConnectionStrings["MISA"].ConnectionString))
            {
                _connection.Open();
                if (_connection.State == System.Data.ConnectionState.Open)
                {
                    SqlCommand _command = new SqlCommand();
                    _command.Connection = _connection;
                    _command.CommandType = System.Data.CommandType.Text;
                    _command.CommandText = @"SELECT * FROM Employee ORDER BY EmployeeCode ";
                    try
                    {
                        SqlDataReader _reader = _command.ExecuteReader();
                        if (_reader.HasRows)
                        {
                            while (_reader.Read())
                            {
                                Employee item = new Employee();
                                item.EmployeeCode = _reader["EmployeeCode"].ToString();
                                item.EmployeeName = _reader["EmployeeName"].ToString();
                                item.Gender = Int32.Parse(_reader["Gender"].ToString());
                                if (_reader["DateOfBirth"].ToString() != "") { 
                                    item.DateOfBirth = Convert.ToDateTime(_reader["DateOfBirth"]).ToString("dd/MM/yyyy");
                                }
                                else
                                {
                                    item.DateOfBirth = "";
                                }
                                item.LeverTraining = _reader["LeverTraining"].ToString();
                                item.AddressTraining = _reader["AddressTraining"].ToString();
                                item.Major = _reader["Major"].ToString();
                                item.JobPosition = _reader["JobPosition"].ToString();
                                item.WorkUnit = _reader["WorkUnit"].ToString();
                                if (_reader["DateTrial"].ToString()!="")
                                {
                                    item.DateTrial = Convert.ToDateTime(_reader["DateTrial"]).ToString("dd/MM/yyyy");
                                }
                                else
                                {
                                    item.DateTrial = "";
                                }
                                if (_reader["DateOfficial"].ToString() != "")
                                {
                                    item.DateOfficial = Convert.ToDateTime(_reader["DateOfficial"]).ToString("dd/MM/yyyy");
                                }
                                else
                                {
                                    item.DateOfficial = "";
                                }
                                item.CMT = _reader["CMT"].ToString();
                                item.Passport = _reader["Passport"].ToString();
                                _employees.Add(item);
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.Write(ex.Message);
                    }
                }
            }
            return _employees;
        }

        // GET: api/Employee/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Employee
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Employee/5
        public void Put(string id, [FromBody]Employee value)
        {

        }

        // DELETE: api/Employee/5
        [HttpDelete]
        public void Delete(string id)
        {
            using (SqlConnection _connection = new SqlConnection(ConfigurationManager.ConnectionStrings["MISA"].ConnectionString))
            {
                _connection.Open();
                if (_connection.State == System.Data.ConnectionState.Open)
                {
                    SqlCommand _command = new SqlCommand();
                    _command.Connection = _connection;
                    _command.CommandType = System.Data.CommandType.Text;
                    _command.CommandText = @"DELETE FROM dbo.Employee WHERE EmployeeCode ='" + id+"'";
                    try
                    {
                        _command.ExecuteNonQuery();
                        
                    }
                    catch (Exception ex)
                    {
                        Console.Write(ex.Message);
                    }
                }
            }
        }
    }
}
