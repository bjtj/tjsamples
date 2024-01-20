using System.Net;
using System.Net.Sockets;
using System.Text;

public class Program
{

    public static void Main()
    {
        Socket socket = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.Udp);

        string SSDP_DISCOVERY = @"M-SEARCH * HTTP/1.1\r\n
Host: 239.255.255.250:1900\r\n
ST: upnp:rootdevice\r\n
MX: 3\r\n
MAN: ""ssdp:discover""\r\n
User-Agent: UPnP/1.0 Sample/1.0 Linux/1.0\r\n
\r\n";

        Byte[] payload = Encoding.ASCII.GetBytes(SSDP_DISCOVERY);

        socket.SendTo(payload, payload.Length, SocketFlags.None, new IPEndPoint(IPAddress.Parse("239.255.255.250"), 1900));
        socket.SendTo(payload, payload.Length, SocketFlags.None, new IPEndPoint(IPAddress.Parse("239.255.255.250"), 1900));

        byte[] receiveBytes = new Byte[256];

        IPEndPoint sender = new IPEndPoint(IPAddress.Any, 0);
        EndPoint senderRemote = (EndPoint)sender;

        int start_time = Environment.TickCount;

        bool finished = false;

        while (!finished)
        {
            if (socket.Poll(1000000, SelectMode.SelectRead))
            {
                byte[] msg = new Byte[1024];
                socket.ReceiveFrom(msg, SocketFlags.None, ref senderRemote);
                string result = System.Text.Encoding.UTF8.GetString(msg);
                Console.WriteLine(result);
            } else {
                Console.WriteLine("...");
            }

            if (Environment.TickCount - start_time > 5000)
            {
                finished = true;
            }
        }

        Console.WriteLine("Done.");

        socket.Close();
    }
}