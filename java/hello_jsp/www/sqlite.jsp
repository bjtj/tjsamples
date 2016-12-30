<%@page contentType="text/html; charset=UTF-8" import="java.sql.*"%>
<html>
	<head><title>sqlite</title></head>
	<body>
		<%
		Connection conn = null;
		try {
			Class.forName("org.sqlite.JDBC");
			conn = DriverManager.getConnection("jdbc:sqlite:test.db");
		} catch (Exception e) {
			// error
		}
		%>

		<%
		{
			Statement st = conn.createStatement();
			st.executeUpdate("create table if not exists users(id integer primary key autoincrement, name text);");
			st.close();
		}
		%>

		<%
		{
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery("select count(*) as cnt from users;");
			if (rs.next()) {
				int cnt = rs.getInt("cnt");
				if (cnt == 0) {
					Statement stmt = conn.createStatement();
					stmt.executeUpdate("insert into users(name) values('jane');");
					stmt.executeUpdate("insert into users(name) values('maria');");
					stmt.close();
				}
			}
			rs.close();
			st.close();
		}
		%>
		
		<%
		{
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery("select * from users;");
			out.write("<ul>");
			while (rs.next()) {
				int id = rs.getInt("id");
				String name = rs.getString("name");
				out.write("<li>[" + id + "] " + name + "</li>");
			}
			out.write("</ul>");
			rs.close();
			st.close();
		}
		%>

		<% conn.close(); %>
	</body>
</html>
