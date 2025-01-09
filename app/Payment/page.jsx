import React from 'react';
import Link from "next/link";

function page() {
  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-4xl font-bold text-primary mb-6">Bills</h1>
      <div className="space-y-4">

        {/* การ์ดบิลแรก */}
        <div className="card bg-primary text-primary-content shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-3xl mb-8">Sigma Boy</h2>
            <p>ชื่อ: นาย จุฑาวัชร บุษษะ</p>
            <p>ห้อง: 206</p>
            <p>ค่าน้ำประปา: 30</p>
            <p>ค่าไฟฟ้า: 1000</p>
            <p className='mb-6'>ค่าห้อง: 3200</p>
            <p className="font-bold text-2xl">รวม : 4230 บาท</p>
            <div className="card-actions justify-end mt-4">
              <Link href ='/Choose_payment'>
              <button  className="btn btn-secondary">เลือกวิธีจ่าย</button>
              </Link>
              
            </div>
          </div>
        </div>

    
      </div>
    </div>
  );
}

export default page;
