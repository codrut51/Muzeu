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
            conn = new MySqlConnection(connStr);
            conn.Open();
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
            if (!CheckUser(user))
            {
                String sql = "INSERT INTO `users`(`Username`, `Password`) VALUES ('" + user + "','" + pass + "')";
                MySqlCommand cmd = new MySqlCommand(sql, conn);
                cmd.ExecuteNonQuery();
            }
            else
            {
                Debug.WriteLine("The user already exists!");
            }
        }
        catch(Exception ex)
        {
            Debug.WriteLine("Wtf: " + ex.ToString());
        }
    }

    public String[] Login(String user, String pass)
    {
        String[] rez = new String[3];
        try
        {
            String sql = "SELECT * FROM `users` WHERE Username = '"+user+"' AND Password = '" + pass + "'";
            MySqlCommand cmd = new MySqlCommand(sql, conn);
            MySqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                if (rdr.HasRows)
                {
                    rez[0] = rdr[0].ToString();
                    rez[1] = rdr[1].ToString();
                    rez[2] = rdr[2].ToString();
                    rdr.Close();
                    return rez;
                } else
                {
                    rez = new String[0];
                    rdr.Close();
                    return rez;
                }
            }
            rdr.Close();
            return rez;
        }
        catch(Exception)
        { 
            rez = new String[0];
            return rez;
        }
    }

    public bool CheckUser(String user)
    {
        try
        {
            String sql = "SELECT * FROM `users` WHERE Username = '" + user + "'";
            MySqlCommand cmd = new MySqlCommand(sql, conn);
            MySqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                if (rdr.HasRows)
                {
                    rdr.Close();
                    return true;
                }
                else
                {
                    rdr.Close();
                    return false;
                }
            }
            rdr.Close();
            return false;
        }
        catch (Exception)
        {
            return false;
        }
    }
    public bool CheckPath(String userID)
    {
        try
        {
            String sql = "SELECT * FROM `resume` WHERE ID = '" + userID + "'";
            MySqlCommand cmd = new MySqlCommand(sql, conn);
            MySqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                if (rdr.HasRows)
                {
                    rdr.Close();
                    return true;
                }
                else
                {
                    rdr.Close();
                    return false;
                }
            }
            rdr.Close();
            return false;
        }
        catch (Exception)
        {
            return false;
        }
    }

    public void AddToPath(String user,String userID, String path)
    {

        try
        {
            Debug.WriteLine(user + " " + userID + " " + path);
            if (!CheckPath(userID))
            {
                String sql = "INSERT INTO `resume`(`ID`, `Path`) VALUES ('" + userID + "','" + path + "')";
                MySqlCommand cmd = new MySqlCommand(sql, conn);
                cmd.ExecuteNonQuery();
            }else
            {
                String sql = "UPDATE `resume` SET `ID`='" + userID + "',`Path`='"+ path + "' WHERE `ID` = '" + userID + "'";
                MySqlCommand cmd = new MySqlCommand(sql, conn);
                cmd.ExecuteNonQuery();
            }
        }
        catch (Exception ex)
        {
            Debug.WriteLine("Wtf: " + ex.ToString());
        }
    }
}