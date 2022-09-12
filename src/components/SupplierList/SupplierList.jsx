import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Supplier from '../Supplier/Supplier'
import './SupplierList.css'
const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([])

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/suppliers')
      .then((res) => res.json())
      .then((data) => setSuppliers(data))
  }, [])

  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">companyName</th>
          <th scope="col">contactName</th>
          <th scope="col">contactTitle</th>
          <th scope="col">country</th>
          <th scope="col">city</th>
          <th scope="col">phone</th>
        </tr>
      </thead>
      <tbody>
        {suppliers.map((supplier) => (
          <Supplier key={supplier.id} supplier={supplier} />
        ))}
      </tbody>
    </table>
  )
}

export default SupplierList
