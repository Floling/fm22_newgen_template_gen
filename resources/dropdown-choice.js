function dropdownChoice() {
    var roleList = document.getElementById("role-list");
    var roleListValue = roleList.options[roleList.selectedIndex].value;
    var roleListText = roleList.options[roleList.selectedIndex].text;
    document.getElementById("dropdown-choice").innerHTML = `
      <p>The selected Value is: ${roleListValue}</p><br>
      <p>The selected Text is: ${roleListText}</p>
    `;
}
  
export { dropdownChoice };