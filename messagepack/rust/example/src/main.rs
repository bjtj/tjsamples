extern crate serde;
#[macro_use]
extern crate serde_derive;
extern crate rmp_serde as rmps;

use rmps::{Deserializer, Serializer};
use serde::{Deserialize, Serialize};

use rmpv::ValueRef;
use rmpv::encode::write_value_ref;

#[derive(Debug, PartialEq, Deserialize, Serialize)]
struct Human {
    age: u32,
    name: String,
}

fn main() {
    rmp_encdec();
    rmp_serde1();
    rmp_serde2();
    rmp_value();
}

fn rmp_encdec() {
    let mut buf = Vec::new();
    rmp::encode::write_bool(&mut buf, true).unwrap();
    println!("{:?}", buf); // [195]
    assert_eq!([0xc3], buf[..]);

    let decoded: bool = rmp::decode::read_bool(&mut &buf[..]).unwrap();
    println!("{:?}", decoded);
}

fn rmp_serde1() {
    let buf = rmp_serde::to_vec(&(42, "the Answer")).unwrap();
    assert_eq!(
        vec![0x92, 0x2a, 0xaa, 0x74, 0x68, 0x65, 0x20, 0x41, 0x6e, 0x73, 0x77, 0x65, 0x72],
        buf
    );
    assert_eq!((42, "the Answer"), rmp_serde::from_slice(&buf).unwrap());
}

fn rmp_serde2() {
    let mut buf = Vec::new();
    let val = Human {
        age: 42,
        name: "John".into(),
    };
    print!("{:?}\n", val); // Human { age: 42, name: "John" }
    val.serialize(&mut Serializer::new(&mut buf)).unwrap();
    println!("{:?}\n", buf); // [146, 42, 164, 74, 111, 104, 110]

    let mut de = Deserializer::new(&buf[..]);
    let actual: Human = Deserialize::deserialize(&mut de).unwrap();
    println!("{:?}\n", actual); // Human { age: 42, name: "John" }
}

fn rmp_value() {

    let buf = [
        0x82, // size: 2
        0x2a, // 42
        0xce, 0x0, 0x1, 0x88, 0x94, // 100500
        0xa3, 0x6b, 0x65, 0x79, // 'key'
        0xa5, 0x76, 0x61, 0x6c, 0x75, 0x65 // 'value'
    ];

    println!("{:?}", buf);

    let map = vec![
        (ValueRef::from(42), ValueRef::from(100500)),
        (ValueRef::from("key"), ValueRef::from("value")),
    ];
    let expected = ValueRef::Map(map);

    {
        let mut buf = Vec::new();
        write_value_ref(&mut buf, &expected).unwrap();
        println!("{:?}", buf); // [130, 42, 206, 0, 1, 136, 148, 163, 107, 101, 121, 165, 118, 97, 108, 117, 101]
    }

}
