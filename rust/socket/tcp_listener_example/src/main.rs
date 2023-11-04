use std::net::{TcpListener, TcpStream};
use std::io::{prelude::*, Write, BufReader};

fn handle_client(mut stream: TcpStream) {

    let buf_reader = BufReader::new(&mut stream);
    let http_request: Vec<_> = buf_reader
        .lines()
        .map(|result| result.unwrap())
        .take_while(|line| !line.is_empty())
        .collect();

    println!("Request: {:#?}", http_request);

    let packet = b"HTTP/1.1 200 OK\r\nContent-Length: 5\r\n\r\nhello";
    let _ = stream.write_all(packet);
    let _ = stream.flush();
    
}

fn main() -> std::io::Result<()> {
    // let listener = TcpListener::bind("127.0.0.1:80")?;
    let listener = TcpListener::bind("0.0.0.0:80")?;

    let addr = listener.local_addr().unwrap();

    println!("local addr: {}", addr);

    // accept connections and process them serially
    for stream in listener.incoming() {
        match stream {
            Ok(stream) => {
                handle_client(stream);
            }
            Err(e) => {
                println!("Connection Failed -- {}", e);
            }
        }
    }
    Ok(())
}
