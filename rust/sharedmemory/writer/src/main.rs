use shared_memory::*;

fn main() {
    let _ = std::fs::remove_file("../basic_write");
    write_test("../basic_write", 30);
}

fn write_test(shmem_flink: &str, max: u8) {
    let shmem = match ShmemConf::new().size(4096).flink(shmem_flink).create() {
        Ok(m) => m,
        Err(ShmemError::LinkExists) => ShmemConf::new().flink(shmem_flink).open().unwrap(),
        Err(e) => {
            eprintln!("Unable to create or open shmem flink {shmem_flink} : {e}");
            return;
        }
    };

    let raw_ptr = shmem.as_ptr();

    unsafe {
        while std::ptr::read_volatile(raw_ptr) < max {
            *raw_ptr += 1;
            println!("write raw ptr: {}", std::ptr::read_volatile(raw_ptr));
            std::thread::sleep(std::time::Duration::from_secs(1));
        }
    }
}
