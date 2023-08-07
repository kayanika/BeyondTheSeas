import React from 'react'


const UniversityList = () => {
  return (
    <div className="list-group">
        <table className="table table-hover table-dark">
            <thead>
            <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
                    <th scope="col">University Name</th>
                    <th scope="col">Country</th>
                    <th scope="col">Rank</th>
                    <th scope="col">Tuition Fees</th>
                    <th scope="col">Cutoff cgpa</th>
                    <th scope="col">Cutoff gre</th>
                    <th scope="col">Available Scholarship</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-active">
                    <td>University of Toronto</td>
                    <td>Canada</td>
                    <td>1</td>
                    <td>50,000</td>
                    <td>3.5</td>
                    <td>320</td>
                    <td>Yes</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default UniversityList