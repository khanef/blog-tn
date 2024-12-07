import React from 'react'
import aboutImg from "../resources/img/about.jpg"
import { HiCheck } from "react-icons/hi";

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center flex flex-col gap-4 py-10'>
      <div className='max-w-4xl mx-auto p-2 text-center '>
        <h1 className='text-5xl font-semibold text-center my-7'>Who are we</h1>
        <p className='text-md text-gray-500 flex flex-col gap-6 pb-4'>
          Bạn có phải là người đam mê cây xanh, yêu thích việc chăm sóc và ngắm nhìn những chậu cây xanh mướt? Hay đơn giản bạn chỉ muốn tìm kiếm một không gian xanh mát cho căn nhà của mình? Khan's Blog là nơi lý tưởng dành cho bạn, một thế giới xanh tươi đầy ắp kiến thức và trải nghiệm về cây cảnh.
        </p>
      </div>
      <div className='flex flex-row gap-8 max-w-5xl'>
        <img src={aboutImg} alt="" className='w-1/2 max-w-xl max-h-80'/>
        <div className='flex flex-col w-1/2 justify-center'>
          <h1 className='text-3xl font-bold mb-4 dark:text-gray-200'>Why choose us?</h1>
          <span className='text-md text-gray-500 flex flex-col gap-6 pb-4'>Mọi người chọn toi vì toi mang đến giá trị và sự khác biệt mà họ tìm kiếm. toi có khả năng lắng nghe, sự chân thành và kiến thức mà họ đánh giá cao. Năng lượng tích cực và sự tự tin của toi cũng thu hút người khác, khiến họ muốn kết nối và hợp tác. Chính vì vậy, mối quan hệ này thường là kết quả tự nhiên, nơi toi trở thành người mà họ cảm thấy có thể học hỏi và chia sẻ.</span>
          <div>
            <div className='flex flex-row gap-4'>
              <HiCheck className='text-gray-400 dark:text-gray-200 mt-1  border border-teal-500 rounded-3xl'/>
              <span>this is text </span>
            </div>
            <div className='flex flex-row gap-4'>
              <HiCheck className='text-gray-400 dark:text-gray-200 mt-1  border border-teal-500 rounded-3xl'/>
              <span>this is text </span>
            </div>
            <div className='flex flex-row gap-4'>
              <HiCheck className='text-gray-400 dark:text-gray-200 mt-1  border border-teal-500 rounded-3xl'/>
              <span>this is text </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
