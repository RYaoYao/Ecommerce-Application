import React from 'react'
import styles from '../../../styles/styles'

const Sponsored = () => {
  return (
    <div className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}>
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png" alt="" style={{width:"150px", objectFit:"contain"}}/>
        </div>
        <div className="flex items-start">
          <img src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png" alt="" style={{width:"150px", objectFit:"contain"}}/>
        </div>
        <div className="flex items-start">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmb-QAHyYFkFEOOTZQcho7q_H8ftKNKahWI_d2lOdz&s" alt="" style={{width:"150px", objectFit:"contain"}}/>
        </div>
        <div className="flex items-start">
          <img src="https://1000logos.net/wp-content/uploads/2017/04/Microsoft-logo.jpg" alt="" style={{width:"150px", objectFit:"contain"}}/>
        </div>
        <div className="flex items-start">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" alt="" style={{width:"150px", objectFit:"contain"}}/>
        </div>
      </div>
    </div>
  )
}

export default Sponsored