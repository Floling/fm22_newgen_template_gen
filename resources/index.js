// This function generates a random number while having a min and max value which can be specified
const genRandomNum = (min, max) => {
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
};

// Hidden Attributes Block contains the main Stats from hidden Attributes
const hiddenAttributesElement = document.getElementById("attributes");

function hiddenAttributesBlock() {
    hiddenAttributesElement.innerHTML = `
        <h2>Personal Attributes</h2>
        <div class='hidden-attributes'>
            <h3>Hidden</h3>
            <p>Player PA: <span>${genRandomNum(155, 166)}</span></p>
            <p>Adaptability: <span>${genRandomNum(15, 21)}</span></p>
            <p>Ambition: <span>${genRandomNum(10, 16)}</span></p>
            <p>Loyalty: <span>${genRandomNum(15, 21)}</span></p>
            <p>Pressure: <span>${genRandomNum(15, 21)}</span></p>
            <p>Professionalism: <span>${genRandomNum(15, 21)}</span></p>
            <p>Sportsmanship: <span>${genRandomNum(10, 21)}</span></p>
            <p>Temperament: <span>${genRandomNum(10, 16)}</span></p>
            <p>Controversy: <span>${genRandomNum(1, 11)}</span></p>
            <p>Consitency: <span>${genRandomNum(15, 21)}</span></p>
            <p>Dirtines: <span>${genRandomNum(1, 6)}</span></p>
            <p>Important Games: <span>${genRandomNum(12, 21)}</span></p>
            <p>Injury proneness: <span>${genRandomNum(1, 4)}</span></p>
            <p>Versatility: <span>${genRandomNum(10, 21)}</span></p>
        </div>
    `;
};

hiddenAttributesElement.addEventListener("load", hiddenAttributesBlock());

// Primary, Secondary and Tertiary attributes definitions
// current stats are for youth players at around 75 ca
// Primary Attributes
const primaryAttribute = () => genRandomNum(9, 14);

// Secondary Attributes
const secondaryAttribute = () => genRandomNum(7, 12);

// Tertiery Attributes
const tertiaryAttribute = () => genRandomNum(5, 9);

// Personality Attributes
const personalityAttributes = () => genRandomNum(10, 17);

// Fitness Attributes
const fitnessAttributes = () => genRandomNum(14, 21);


// here come all the player role-attributes
// AM-A
const attMidAtt = () => {
    document.getElementById("dropdown-choice").innerHTML = `
        <h2>Attributes AM-A</h3>
        <div class='attributes-wrapper'>
            <div class='technical'>
            <h3>Technical</h3>
            <p>Corners: <span>${tertiaryAttribute()}</span></p>
            <p>Crossing: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Dribbling: <span>${primaryAttribute()}</span></p>
            <p class='secondary-attribute'>Finishing: <span>${secondaryAttribute()}</span></p>
            <p class='primary-attribute'>First Touch: <span>${primaryAttribute()}</span></p>
            <p>Free Kick Taking: <span>${tertiaryAttribute()}</span></p>
            <p>Heading: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Long Shots: <span>${primaryAttribute()}</span></p>
            <p>Long Throws: <span>${tertiaryAttribute()}</span></p>
            <p>Marking: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Passing: <span>${primaryAttribute()}</span></p>
            <p>Penalty Taking: <span>${tertiaryAttribute()}</span></p>
            <p>Tackling: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Technique: <span>${primaryAttribute()}</span></p>
            </div>
        
            <div class='mental'>
            <h3>Mental</h3>
            <p>Aggression: <span>${personalityAttributes()}</span></p>
            <p class='primary-attribute'>Anticipation: <span>${primaryAttribute()}</span></p>
            <p>Bravery: <span>${personalityAttributes()}</span></p>
            <p class='secondary-attribute'>Composure: <span>${secondaryAttribute()}</span></p>
            <p>Concentration: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Decisions: <span>${primaryAttribute()}</span></p>
            <p>Determination: <span>${personalityAttributes()}</span></p>
            <p class='primary-attribute'>Flair: <span>${primaryAttribute()}</span></p>
            <p>Leadership: <span>${personalityAttributes()}</span></p>
            <p class='primary-attribute'>Off The Ball: <span>${primaryAttribute()}</span></p>
            <p>Positioning: <span>${tertiaryAttribute()}</span></p>
            <p>Teamwork: <span>${personalityAttributes()}</span></p>
            <p class='secondary-attribute'>Vision: <span>${secondaryAttribute()}</span></p>
            <p>Work Rate: <span>${personalityAttributes()}</span></p>
            </div>
        
            <div class='physical'>
            <h3>Physical</h3>
            <p>Acceleration: <span>${tertiaryAttribute()}</span></p>
            <p class='secondary-attribute'>Agility: <span>${secondaryAttribute()}</span></p>
            <p>Balance: <span>${tertiaryAttribute()}</span></p>
            <p>Jumping Reach: <span>0</span></p>
            <p>Natural Fitness: <span>${fitnessAttributes()}</span></p>
            <p>Pace: <span>${tertiaryAttribute()}</span></p>
            <p>Stamina: <span>${tertiaryAttribute()}</span></p>
            <p>Strength: <span>${tertiaryAttribute()}</span></p>
            </div>
        </div>
    `;
};
// AM-S
const attMidSup = () => {
    document.getElementById("dropdown-choice").innerHTML = `
        <h2>Attributes AM-S</h3>
        <div class='attributes-wrapper'>
            <div class='technical'>
            <h3>Technical</h3>
            <p>Corners: <span>${tertiaryAttribute()}</span></p>
            <p>Crossing: <span>${tertiaryAttribute()}</span></p>
            <p class='secondary-attribute'>Dribbling: <span>${secondaryAttribute()}</span></p>
            <p>Finishing: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>First Touch: <span>${primaryAttribute()}</span></p>
            <p>Free Kick Taking: <span>${tertiaryAttribute()}</span></p>
            <p>Heading: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Long Shots: <span>${primaryAttribute()}</span></p>
            <p>Long Throws: <span>${tertiaryAttribute()}</span></p>
            <p>Marking: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Passing: <span>${primaryAttribute()}</span></p>
            <p>Penalty Taking: <span>${tertiaryAttribute()}</span></p>
            <p>Tackling: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Technique: <span>${primaryAttribute()}</span></p>
            </div>
        
            <div class='mental'>
            <h3>Mental</h3>
            <p>Aggression: <span>${personalityAttributes()}</span></p>
            <p class='primary-attribute'>Anticipation: <span>${primaryAttribute()}</span></p>
            <p>Bravery: <span>${personalityAttributes()}</span></p>
            <p class='secondary-attribute'>Composure: <span>${secondaryAttribute()}</span></p>
            <p>Concentration: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Decisions: <span>${primaryAttribute()}</span></p>
            <p>Determination: <span>${personalityAttributes()}</span></p>
            <p class='primary-attribute'>Flair: <span>${primaryAttribute()}</span></p>
            <p>Leadership: <span>${personalityAttributes()}</span></p>
            <p class='primary-attribute'>Off The Ball: <span>${primaryAttribute()}</span></p>
            <p>Positioning: <span>${tertiaryAttribute()}</span></p>
            <p>Teamwork: <span>${personalityAttributes()}</span></p>
            <p class='secondary-attribute'>Vision: <span>${secondaryAttribute()}</span></p>
            <p>Work Rate: <span>${personalityAttributes()}</span></p>
            </div>
        
            <div class='physical'>
            <h3>Physical</h3>
            <p>Acceleration: <span>${tertiaryAttribute()}</span></p>
            <p class='secondary-attribute'>Agility: <span>${secondaryAttribute()}</span></p>
            <p>Balance: <span>${tertiaryAttribute()}</span></p>
            <p>Jumping Reach: <span>0</span></p>
            <p>Natural Fitness: <span>${fitnessAttributes()}</span></p>
            <p>Pace: <span>${tertiaryAttribute()}</span></p>
            <p>Stamina: <span>${tertiaryAttribute()}</span></p>
            <p>Strength: <span>${tertiaryAttribute()}</span></p>
            </div>
        </div>
    `;
};
// AP-A
const advPlaAtt = () => {
    document.getElementById("dropdown-choice").innerHTML = `
        <h2>Attributes AP-A</h3>
        <div class='attributes-wrapper'>
            <div class='technical'>
            <h3>Technical</h3>
            <p>Corners: <span>${tertiaryAttribute()}</span></p>
            <p>Crossing: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Dribbling: <span>${primaryAttribute()}</span></p>
            <p>Finishing: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>First Touch: <span>${primaryAttribute()}</span></p>
            <p>Free Kick Taking: <span>${tertiaryAttribute()}</span></p>
            <p>Heading: <span>${tertiaryAttribute()}</span></p>
            <p>Long Shots: <span>${tertiaryAttribute()}</span></p>
            <p>Long Throws: <span>${tertiaryAttribute()}</span></p>
            <p>Marking: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Passing: <span>${primaryAttribute()}</span></p>
            <p>Penalty Taking: <span>${tertiaryAttribute()}</span></p>
            <p>Tackling: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Technique: <span>${primaryAttribute()}</span></p>
            </div>
        
            <div class='mental'>
            <h3>Mental</h3>
            <p>Aggression: <span>${personalityAttributes()}</span></p>
            <p class='secondary-attribute'>Anticipation: <span>${secondaryAttribute()}</span></p>
            <p>Bravery: <span>${personalityAttributes()}</span></p>
            <p class='primary-attribute'>Composure: <span>${primaryAttribute()}</span></p>
            <p>Concentration: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Decisions: <span>${primaryAttribute()}</span></p>
            <p>Determination: <span>${personalityAttributes()}</span></p>
            <p class='secondary-attribute'>Flair: <span>${secondaryAttribute()}</span></p>
            <p>Leadership: <span>${personalityAttributes()}</span></p>
            <p class='primary-attribute'>Off The Ball: <span>${primaryAttribute()}</span></p>
            <p>Positioning: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Teamwork: <span>${personalityAttributes()}</span></p>
            <p class='primary-attribute'>Vision: <span>${primaryAttribute()}</span></p>
            <p>Work Rate: <span>${personalityAttributes()}</span></p>
            </div>
        
            <div class='physical'>
            <h3>Physical</h3>
            <p class='secondary-attribute'>Acceleration: <span>${secondaryAttribute()}</span></p>
            <p class='secondary-attribute'>Agility: <span>${secondaryAttribute()}</span></p>
            <p>Balance: <span>${tertiaryAttribute()}</span></p>
            <p>Jumping Reach: <span>0</span></p>
            <p>Natural Fitness: <span>${fitnessAttributes()}</span></p>
            <p>Pace: <span>${tertiaryAttribute()}</span></p>
            <p>Stamina: <span>${tertiaryAttribute()}</span></p>
            <p>Strength: <span>${tertiaryAttribute()}</span></p>
            </div>
        </div>
    `;
}


// This section populates the normal player attributes based on the Dropdown selection 
const roleList = document.getElementById("role-list");

function dropdownChoice() {
    const roleListValue = roleList.options[roleList.selectedIndex].value;
    const roleListText = roleList.options[roleList.selectedIndex].text;
    if (roleListValue === "am-a") {
        attMidAtt();
    }
    else if (roleListValue === "am-s") {
        attMidSup();
    }
    else if (roleListValue === "ap-a") {
        advPlaAtt();
    }
    /*
    document.getElementById("dropdown-choice").innerHTML = `
      <p>The selected Value is: ${roleListValue}</p><br>
      <p>The selected Text is: ${roleListText}</p>
    `;
    */
}

roleList.addEventListener("change", dropdownChoice());