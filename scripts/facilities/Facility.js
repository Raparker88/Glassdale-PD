

export const facilityHTML = (facilityObj, criminalArr) => {
    return `
        <div class=facility__card>
            <h3>${facilityObj.facilityName}</h3>
            <p>security level:${facilityObj.securityLevel}</p>
            <p>capacity: ${facilityObj.capacity}</p>
            <h4>Criminals</h4>
            <ul>
                ${criminalArr.map(c => `<li>${c.name}</li>`).join('')}
            </ul>

        </div>`
}