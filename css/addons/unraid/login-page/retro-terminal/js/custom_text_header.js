
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>  ____   ____ _    __ ____ _   __ _____    _   __       __ 
   / __ \ /  _/| |  / //  _// | / // ___/   / | / /___   / /_
  / /_/ / / /  | | / / / / /  |/ / \__ \   /  |/ // _ \ / __/
 / _, _/_/ /   | |/ /_/ / / /|  / ___/ /  / /|  //  __// /_  
/_/ |_|/___/   |___//___//_/ |_/ /____/  /_/ |_/ \___/ \__/  
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
