import React from 'react'
import './Supplier.css'
const Supplier = (props) => {
  const supplier = props.supplier
  return (
    <tr className={supplier.address.country === 'Japan' ? 'active' : ''}>
      <th scope="row">{supplier.id}</th>
      <td>{supplier.companyName}</td>
      <td>{supplier.contactName}</td>
      <td>{supplier.contactTitle}</td>
      <td>{supplier.address.country}</td>
      <td>{supplier.address.city}</td>
      <td>{supplier.address.phone}</td>
    </tr>
  )
}

export default Supplier
