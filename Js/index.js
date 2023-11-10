Records.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
        <td>${order.patientName}</td>
        <td>${order.patientTreatment}</td>
        <td>${order.patientStatus}</td>
        <td>${order.time_and_date}</td>
        <td class="primary">Details</td>
    `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
