using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data;
using MySql.Data.MySqlClient;
using System.Diagnostics;

/// <summary>
/// Created by Andra Musca, Anca Moldovan, Cosmina Tezi si Stoica Elena
/// </summary>
public class Database
{
    private static string connStr = "datasource=localhost;port=3306;username=root;password=;database=muzeu;";
    private MySqlConnection conn;
    public Database()
    {
        try
        {
            Debug.WriteLine("This is a message");
            conn = new MySqlConnection(connStr);
            conn.Open();
            Debug.WriteLine("This is another message");
           /* CreateUser("andra.musca", "234@#$WER");
            string sql = "SELECT * FROM Users";
            MySqlCommand cmd = new MySqlCommand(sql, conn);
            MySqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                Console.WriteLine(rdr[0] + " -- " + rdr[1]);
            }
            rdr.Close();*/
        }
        catch(Exception ex)
        {
            Debug.WriteLine("Wtf: " + ex.ToString());
        }
    }

    public void CreateUser(String user, String pass)
    {
        try
        {
            Debug.WriteLine("This is a message 1 ");
            String sql = "INSERT INTO `users`(`Username`, `Password`) VALUES ('" + user +"','"+ pass +"')";
            Debug.WriteLine(sql);
            MySqlCommand cmd = new MySqlCommand(sql, conn);
            cmd.ExecuteNonQuery();
            Debug.WriteLine("This is a message another 1");
        }
        catch(Exception ex)
        {
            Debug.WriteLine("Wtf: " + ex.ToString());
        }
    }

    public Boolean Login(String user, String pass)
    {
        try
        {
            String sql = "SELECT * FROM `users` WHERE Username = '"+user+"' AND Password = '" + pass + "'";
            MySqlCommand cmd = new MySqlCommand(sql, conn);
            MySqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                if (rdr.HasRows)
                {
                    rdr.Close();
                    return true;
                } else
                {
                    rdr.Close();
                    return false;
                }
            }
            return false;
        }
        catch(Exception ex)
        {
            return false;
        }
    }
}