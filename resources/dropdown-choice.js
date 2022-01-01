const roleList = document.getElementById("role-list");

function dropdownChoice() {
    const roleListValue = roleList.options[roleList.selectedIndex].value;
    const roleListText = roleList.options[roleList.selectedIndex].text;
    document.getElementById("dropdown-choice").innerHTML = `
      <p>The selected Value is: ${roleListValue}</p><br>
      <p>The selected Text is: ${roleListText}</p>
    `;
}

roleList.addEventListener("change", dropdownChoice());