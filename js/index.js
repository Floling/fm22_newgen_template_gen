// This function generates a random number while having a min and max value which can be specified
const genRandomNum = (min, max) => {
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
};

// Hidden Attributes Block generates a players hidden Attributes, makes use of genRandomNum
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
const dropChoiceEle = document.getElementById('dropdown-choice');

// AF-A: Advanced Forward - Attack
const advForAtt = () => {
    dropChoiceEle.innerHTML = `
        <h2>Advanced Forward - Attack</h3>
        <div class='attributes-wrapper'>
            <div class='technical'>
                <h3>Technical</h3>
                <p>
                    Corners: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Crossing: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Dribbling: <span>${primaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Finishing: <span>${primaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    First Touch: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Free Kick Taking: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Heading: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Long Shots: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Long Throws: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Marking: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Passing: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Penalty Taking: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Tackling: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Technique: <span>${primaryAttribute()}</span>
                </p>
            </div>
        
            <div class='mental'>
                <h3>Mental</h3>
                <p>
                    Aggression: <span>${personalityAttributes()}</span>
                </p>
                <p class='secondary-attribute'>
                    Anticipation: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Bravery: <span>${personalityAttributes()}</span>
                </p>
                <p class='primary-attribute'>
                    Composure: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Concentration: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Decisions: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Determination: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Flair: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Leadership: <span>${personalityAttributes()}</span>
                </p>
                <p class='primary-attribute'>
                    Off The Ball: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Positioning: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Teamwork: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Vision: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Work Rate: <span>${personalityAttributes()}</span>
                </p>
            </div>
        
            <div class='physical'>
                <h3>Physical</h3>
                <p class='primary-attribute'>
                    Acceleration: <span>${primaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Agility: <span>${secondaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Balance: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Jumping Reach: <span>0</span>
                </p>
                <p>
                    Natural Fitness: <span>${fitnessAttributes()}</span>
                </p>
                <p class='secondary-attribute'>
                    Pace: <span>${secondaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Stamina: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Strength: <span>${tertiaryAttribute()}</span>
                </p>
            </div>
        </div>
    `;
};

// AM-A: Attacking Midfielder - Attack
const attMidAtt = () => {
    dropChoiceEle.innerHTML = `
        <h2>Attacking Midfielder - Attack</h3>
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

// AM-S: Attacking Midfielder - Support
const attMidSup = () => {
    dropChoiceEle.innerHTML = `
        <h2>Attacking Midfielder - Support</h3>
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

// ANC-D: Anchor Man - Defend
const ancManDef = () => {
    dropChoiceEle.innerHTML = `
        <h2>Anchor Man - Defend</h3>
        <div class='attributes-wrapper'>
            <div class='technical'>
                <h3>Technical</h3>
                <p>
                    Corners: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Crossing: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Dribbling: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Finishing: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    First Touch: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Free Kick Taking: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Heading: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Long Shots: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Long Throws: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Marking: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Passing: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Penalty Taking: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Tackling: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Technique: <span>${tertiaryAttribute()}</span>
                </p>
            </div>
        
            <div class='mental'>
                <h3>Mental</h3>
                <p>
                    Aggression: <span>${personalityAttributes()}</span>
                </p>
                <p class='primary-attribute'>
                    Anticipation: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Bravery: <span>${personalityAttributes()}</span>
                </p>
                <p class='secondary-attribute'>
                    Composure: <span>${secondaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Concentration: <span>${primaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Decisions: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Determination: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Flair: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Leadership: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Off The Ball: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Positioning: <span>${primaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Teamwork: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Vision: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Work Rate: <span>${personalityAttributes()}</span>
                </p>
            </div>
        
            <div class='physical'>
                <h3>Physical</h3>
                <p>
                    Acceleration: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Agility: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Balance: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Jumping Reach: <span>0</span>
                </p>
                <p>
                    Natural Fitness: <span>${fitnessAttributes()}</span>
                </p>
                <p>
                    Pace: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Stamina: <span>${tertiaryAttribute()}</span>
                </p>
                <p  class='secondary-attribute'>
                    Strength: <span>${secondaryAttribute()}</span>
                </p>
            </div>
        </div>
    `;
};

// AP-A: Advanced Playmaker - Attack
const advPlaAtt = () => {
    dropChoiceEle.innerHTML = `
        <h2>Advanced Playmaker - Attack</h3>
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
};

// AP-S: Advanced Playmaker - Support
const advPlaSup = () => {
    dropChoiceEle.innerHTML = `
        <h2>Advanced Playmaker - Support</h3>
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
            <p>Anticipation: <span>${tertiaryAttribute()}</span></p>
            <p>Bravery: <span>${personalityAttributes()}</span></p>
            <p class='primary-attribute'>Composure: <span>${primaryAttribute()}</span></p>
            <p>Concentration: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Decisions: <span>${primaryAttribute()}</span></p>
            <p>Determination: <span>${personalityAttributes()}</span></p>
            <p>Flair: <span>${tertiaryAttribute()}</span></p>
            <p>Leadership: <span>${personalityAttributes()}</span></p>
            <p class='primary-attribute'>Off The Ball: <span>${primaryAttribute()}</span></p>
            <p>Positioning: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Teamwork: <span>${personalityAttributes()}</span></p>
            <p class='primary-attribute'>Vision: <span>${primaryAttribute()}</span></p>
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

// B2B-S: Box to Box Midfielder - Support
const boxBoxSup = () => {
    dropChoiceEle.innerHTML = `
        <h2>Box to Box Midfielder - Support</h3>
        <div class='attributes-wrapper'>
            <div class='technical'>
                <h3>Technical</h3>
                <p>
                    Corners: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Crossing: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Dribbling: <span>${secondaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Finishing: <span>${secondaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    First Touch: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Free Kick Taking: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Heading: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Long Shots: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Long Throws: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Marking: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Passing: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Penalty Taking: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Tackling: <span>${primaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Technique: <span>${secondaryAttribute()}</span>
                </p>
            </div>
        
            <div class='mental'>
                <h3>Mental</h3>
                <p class='secondary-attribute'>
                    Aggression: <span>${personalityAttributes()}</span>
                </p>
                <p class='secondary-attribute'>
                    Anticipation: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Bravery: <span>${personalityAttributes()}</span>
                </p>
                <p class='secondary-attribute'>
                    Composure: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Concentration: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Decisions: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Determination: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Flair: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Leadership: <span>${personalityAttributes()}</span>
                </p>
                <p class='primary-attribute'>
                    Off The Ball: <span>${primaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Positioning: <span>${secondaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Teamwork: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Vision: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Work Rate: <span>${personalityAttributes()}</span>
                </p>
            </div>
        
            <div class='physical'>
                <h3>Physical</h3>
                <p class='secondary-attribute'>
                    Acceleration: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Agility: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Balance: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Jumping Reach: <span>0</span>
                </p>
                <p>
                    Natural Fitness: <span>${fitnessAttributes()}</span>
                </p>
                <p class='secondary-attribute'>
                    Pace: <span>${secondaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Stamina: <span>${primaryAttribute()}</span>
                </p>
                <p  class='secondary-attribute'>
                    Strength: <span>${secondaryAttribute()}</span>
                </p>
            </div>
        </div>
    `;
};

// BPD-C: Ball Playing Defender - Cover
const BaPlDeCov = () => {
    dropChoiceEle.innerHTML = `
        <h2>Ball Playing Defender - Cover</h3>
        <div class='attributes-wrapper'>
            <div class='technical'>
            <h3>Technical</h3>
            <p>Corners: <span>${tertiaryAttribute()}</span></p>
            <p>Crossing: <span>${tertiaryAttribute()}</span></p>
            <p>Dribbling: <span>${secondaryAttribute()}</span></p>
            <p>Finishing: <span>${tertiaryAttribute()}</span></p>
            <p class='secondary-attribute'>First Touch: <span>${secondaryAttribute()}</span></p>
            <p>Free Kick Taking: <span>${tertiaryAttribute()}</span></p>
            <p class='secondary-attribute'>Heading: <span>${secondaryAttribute()}</span></p>
            <p>Long Shots: <span>${tertiaryAttribute()}</span></p>
            <p>Long Throws: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Marking: <span>${primaryAttribute()}</span></p>
            <p class='primary-attribute'>Passing: <span>${primaryAttribute()}</span></p>
            <p>Penalty Taking: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Tackling: <span>${primaryAttribute()}</span></p>
            <p class='secondary-attribute'>Technique: <span>${secondaryAttribute()}</span></p>
            </div>
        
            <div class='mental'>
            <h3>Mental</h3>
            <p>Aggression: <span>${personalityAttributes()}</span></p>
            <p class='primary-attribute'>Anticipation: <span>${primaryAttribute()}</span></p>
            <p>Bravery: <span>${personalityAttributes()}</span></p>
            <p class='primary-attribute'>Composure: <span>${primaryAttribute()}</span></p>
            <p class='primary-attribute'>Concentration: <span>${primaryAttribute()}</span></p>
            <p class='primary-attribute'>Decisions: <span>${primaryAttribute()}</span></p>
            <p>Determination: <span>${personalityAttributes()}</span></p>
            <p>Flair: <span>${tertiaryAttribute()}</span></p>
            <p>Leadership: <span>${personalityAttributes()}</span></p>
            <p>Off The Ball: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Positioning: <span>${primaryAttribute()}</span></p>
            <p>Teamwork: <span>${personalityAttributes()}</span></p>
            <p class='secondary-attribute'>Vision: <span>${secondaryAttribute()}</span></p>
            <p>Work Rate: <span>${personalityAttributes()}</span></p>
            </div>
        
            <div class='physical'>
            <h3>Physical</h3>
            <p>Acceleration: <span>${tertiaryAttribute()}</span></p>
            <p>Agility: <span>${tertiaryAttribute()}</span></p>
            <p>Balance: <span>${tertiaryAttribute()}</span></p>
            <p>Jumping Reach: <span>0</span></p>
            <p>Natural Fitness: <span>${fitnessAttributes()}</span></p>
            <p class='primary-attribute'>Pace: <span>${primaryAttribute()}</span></p>
            <p>Stamina: <span>${tertiaryAttribute()}</span></p>
            <p class='secondary-attribute'>Strength: <span>${secondaryAttribute()}</span></p>
            </div>
        </div>
    `;
};

// BPD-D: Ball Playing Defender - Defend
const BaPlDeDef = () => {
    dropChoiceEle.innerHTML = `
        <h2>Ball Playing Defender - Defend</h3>
        <div class='attributes-wrapper'>
            <div class='technical'>
            <h3>Technical</h3>
            <p>Corners: <span>${tertiaryAttribute()}</span></p>
            <p>Crossing: <span>${tertiaryAttribute()}</span></p>
            <p>Dribbling: <span>${secondaryAttribute()}</span></p>
            <p>Finishing: <span>${tertiaryAttribute()}</span></p>
            <p class='secondary-attribute'>First Touch: <span>${secondaryAttribute()}</span></p>
            <p>Free Kick Taking: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Heading: <span>${primaryAttribute()}</span></p>
            <p>Long Shots: <span>${tertiaryAttribute()}</span></p>
            <p>Long Throws: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Marking: <span>${primaryAttribute()}</span></p>
            <p class='primary-attribute'>Passing: <span>${primaryAttribute()}</span></p>
            <p>Penalty Taking: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Tackling: <span>${primaryAttribute()}</span></p>
            <p class='secondary-attribute'>Technique: <span>${secondaryAttribute()}</span></p>
            </div>
        
            <div class='mental'>
            <h3>Mental</h3>
            <p>Aggression: <span>${personalityAttributes()}</span></p>
            <p class='secondary-attribute'>Anticipation: <span>${secondaryAttribute()}</span></p>
            <p>Bravery: <span>${personalityAttributes()}</span></p>
            <p class='primary-attribute'>Composure: <span>${primaryAttribute()}</span></p>
            <p class='secondary-attribute'>Concentration: <span>${secondaryAttribute()}</span></p>
            <p class='secondary-attribute'>Decisions: <span>${secondaryAttribute()}</span></p>
            <p>Determination: <span>${personalityAttributes()}</span></p>
            <p>Flair: <span>${tertiaryAttribute()}</span></p>
            <p>Leadership: <span>${personalityAttributes()}</span></p>
            <p>Off The Ball: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Positioning: <span>${primaryAttribute()}</span></p>
            <p>Teamwork: <span>${personalityAttributes()}</span></p>
            <p class='secondary-attribute'>Vision: <span>${secondaryAttribute()}</span></p>
            <p>Work Rate: <span>${personalityAttributes()}</span></p>
            </div>
        
            <div class='physical'>
            <h3>Physical</h3>
            <p>Acceleration: <span>${tertiaryAttribute()}</span></p>
            <p>Agility: <span>${tertiaryAttribute()}</span></p>
            <p>Balance: <span>${tertiaryAttribute()}</span></p>
            <p>Jumping Reach: <span>0</span></p>
            <p>Natural Fitness: <span>${fitnessAttributes()}</span></p>
            <p class='secondary-attribute'>Pace: <span>${secondaryAttribute()}</span></p>
            <p>Stamina: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Strength: <span>${personalityAttributes()}</span></p>
            </div>
        </div>
    `;
};

// BPD-D: Ball Playing Defender - Stopper
const BaPlDeSto = () => {
    dropChoiceEle.innerHTML = `
        <h2>Ball Playing Defender - Stopper</h3>
        <div class='attributes-wrapper'>
            <div class='technical'>
            <h3>Technical</h3>
            <p>Corners: <span>${tertiaryAttribute()}</span></p>
            <p>Crossing: <span>${tertiaryAttribute()}</span></p>
            <p>Dribbling: <span>${secondaryAttribute()}</span></p>
            <p>Finishing: <span>${tertiaryAttribute()}</span></p>
            <p class='secondary-attribute'>First Touch: <span>${secondaryAttribute()}</span></p>
            <p>Free Kick Taking: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Heading: <span>${primaryAttribute()}</span></p>
            <p>Long Shots: <span>${tertiaryAttribute()}</span></p>
            <p>Long Throws: <span>${tertiaryAttribute()}</span></p>
            <p class='secondary-attribute'>Marking: <span>${secondaryAttribute()}</span></p>
            <p class='primary-attribute'>Passing: <span>${primaryAttribute()}</span></p>
            <p>Penalty Taking: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Tackling: <span>${primaryAttribute()}</span></p>
            <p class='secondary-attribute'>Technique: <span>${secondaryAttribute()}</span></p>
            </div>
        
            <div class='mental'>
            <h3>Mental</h3>
            <p class='primary-attribute'>Aggression: <span>${personalityAttributes()}</span></p>
            <p class='secondary-attribute'>Anticipation: <span>${secondaryAttribute()}</span></p>
            <p class='primary-attribute'>Bravery: <span>${personalityAttributes()}</span></p>
            <p class='primary-attribute'>Composure: <span>${primaryAttribute()}</span></p>
            <p class='secondary-attribute'>Concentration: <span>${secondaryAttribute()}</span></p>
            <p class='primary-attribute'>Decisions: <span>${primaryAttribute()}</span></p>
            <p>Determination: <span>${personalityAttributes()}</span></p>
            <p>Flair: <span>${tertiaryAttribute()}</span></p>
            <p>Leadership: <span>${personalityAttributes()}</span></p>
            <p>Off The Ball: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Positioning: <span>${primaryAttribute()}</span></p>
            <p>Teamwork: <span>${personalityAttributes()}</span></p>
            <p class='secondary-attribute'>Vision: <span>${secondaryAttribute()}</span></p>
            <p>Work Rate: <span>${personalityAttributes()}</span></p>
            </div>
        
            <div class='physical'>
            <h3>Physical</h3>
            <p>Acceleration: <span>${tertiaryAttribute()}</span></p>
            <p>Agility: <span>${tertiaryAttribute()}</span></p>
            <p>Balance: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Jumping Reach: <span>0</span></p>
            <p>Natural Fitness: <span>${fitnessAttributes()}</span></p>
            <p class='secondary-attribute'>Pace: <span>${secondaryAttribute()}</span></p>
            <p>Stamina: <span>${tertiaryAttribute()}</span></p>
            <p class='primary-attribute'>Strength: <span>${personalityAttributes()}</span></p>
            </div>
        </div>
    `;
};

// BWN-D: Ball Winning Midfielder - Defend
const balWinDef = () => {
    dropChoiceEle.innerHTML = `
        <h2>Ball Winning Midfielder - Defend</h3>
        <div class='attributes-wrapper'>
            <div class='technical'>
                <h3>Technical</h3>
                <p>
                    Corners: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Crossing: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Dribbling: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Finishing: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    First Touch: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Free Kick Taking: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Heading: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Long Shots: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Long Throws: <span>${tertiaryAttribute()}</span>
                </p>
                <p  class='secondary-attribute'>
                    Marking: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Passing: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Penalty Taking: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Tackling: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Technique: <span>${tertiaryAttribute()}</span>
                </p>
            </div>
        
            <div class='mental'>
                <h3>Mental</h3>
                <p class='primary-attribute'>
                    Aggression: <span>${personalityAttributes()}</span>
                </p>
                <p class='primary-attribute'>
                    Anticipation: <span>${primaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Bravery: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Composure: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Concentration: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Decisions: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Determination: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Flair: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Leadership: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Off The Ball: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Positioning: <span>${secondaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Teamwork: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Vision: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Work Rate: <span>${personalityAttributes()}</span>
                </p>
            </div>
        
            <div class='physical'>
                <h3>Physical</h3>
                <p>
                    Acceleration: <span>${tertiaryAttribute()}</span>
                </p>
                <p  class='secondary-attribute'>
                    Agility: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Balance: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Jumping Reach: <span>0</span>
                </p>
                <p>
                    Natural Fitness: <span>${fitnessAttributes()}</span>
                </p>
                <p class='secondary-attribute'>
                    Pace: <span>${secondaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Stamina: <span>${secondaryAttribute()}</span>
                </p>
                <p  class='secondary-attribute'>
                    Strength: <span>${secondaryAttribute()}</span>
                </p>
            </div>
        </div>
    `;
};

// BWN-S: Ball Winning Midfielder - Support
const balWinSup = () => {
    dropChoiceEle.innerHTML = `
        <h2>Ball Winning Midfielder - Support</h3>
        <div class='attributes-wrapper'>
            <div class='technical'>
                <h3>Technical</h3>
                <p>
                    Corners: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Crossing: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Dribbling: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Finishing: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    First Touch: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Free Kick Taking: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Heading: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Long Shots: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Long Throws: <span>${tertiaryAttribute()}</span>
                </p>
                <p  class='secondary-attribute'>
                    Marking: <span>${secondaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Passing: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Penalty Taking: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Tackling: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Technique: <span>${tertiaryAttribute()}</span>
                </p>
            </div>
        
            <div class='mental'>
                <h3>Mental</h3>
                <p class='primary-attribute'>
                    Aggression: <span>${personalityAttributes()}</span>
                </p>
                <p class='primary-attribute'>
                    Anticipation: <span>${primaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Bravery: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Composure: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Concentration: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Decisions: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Determination: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Flair: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Leadership: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Off The Ball: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Positioning: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Teamwork: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Vision: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Work Rate: <span>${personalityAttributes()}</span>
                </p>
            </div>
        
            <div class='physical'>
                <h3>Physical</h3>
                <p>
                    Acceleration: <span>${tertiaryAttribute()}</span>
                </p>
                <p  class='secondary-attribute'>
                    Agility: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Balance: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Jumping Reach: <span>0</span>
                </p>
                <p>
                    Natural Fitness: <span>${fitnessAttributes()}</span>
                </p>
                <p class='secondary-attribute'>
                    Pace: <span>${secondaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Stamina: <span>${secondaryAttribute()}</span>
                </p>
                <p  class='secondary-attribute'>
                    Strength: <span>${secondaryAttribute()}</span>
                </p>
            </div>
        </div>
    `;
};

// CAR-S: Carrilero - Support
const carrilSup = () => {
    dropChoiceEle.innerHTML = `
        <h2>Carrilero - Support</h3>
        <div class='attributes-wrapper'>
            <div class='technical'>
                <h3>Technical</h3>
                <p>
                    Corners: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Crossing: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Dribbling: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Finishing: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    First Touch: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Free Kick Taking: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Heading: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Long Shots: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Long Throws: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Marking: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Passing: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Penalty Taking: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Tackling: <span>${primaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Technique: <span>${secondaryAttribute()}</span>
                </p>
            </div>
        
            <div class='mental'>
                <h3>Mental</h3>
                <p>
                    Aggression: <span>${personalityAttributes()}</span>
                </p>
                <p class='secondary-attribute'>
                    Anticipation: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Bravery: <span>${personalityAttributes()}</span>
                </p>
                <p class='secondary-attribute'>
                    Composure: <span>${secondaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Concentration: <span>${secondaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Decisions: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Determination: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Flair: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Leadership: <span>${personalityAttributes()}</span>
                </p>
                <p class='secondary-attribute'>
                    Off The Ball: <span>${secondaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Positioning: <span>${primaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Teamwork: <span>${personalityAttributes()}</span>
                </p>
                <p class='secondary-attribute'>
                    Vision: <span>${secondaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Work Rate: <span>${personalityAttributes()}</span>
                </p>
            </div>
        
            <div class='physical'>
                <h3>Physical</h3>
                <p>
                    Acceleration: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Agility: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Balance: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Jumping Reach: <span>0</span>
                </p>
                <p>
                    Natural Fitness: <span>${fitnessAttributes()}</span>
                </p>
                <p>
                    Pace: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Stamina: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Strength: <span>${tertiaryAttribute()}</span>
                </p>
            </div>
        </div>
    `;
};

// CD-C: Central Defender - Cover
const cenDefCov = () => {
    dropChoiceEle.innerHTML = `
        <h2>Central Defender - Cover</h3>
        <div class='attributes-wrapper'>
            <div class='technical'>
                <h3>Technical</h3>
                <p>
                    Corners: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Crossing: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Dribbling: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Finishing: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    First Touch: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Free Kick Taking: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Heading: <span>${secondaryAttribute()}</span>
                </p>
                <p>
                    Long Shots: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Long Throws: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Marking: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Passing: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Penalty Taking: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Tackling: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Technique: <span>${tertiaryAttribute()}</span>
                </p>
            </div>
        
            <div class='mental'>
                <h3>Mental</h3>
                <p>
                    Aggression: <span>${personalityAttributes()}</span>
                </p>
                <p class='primary-attribute'>
                    Anticipation: <span>${primaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Bravery: <span>${personalityAttributes()}</span>
                </p>
                <p class='secondary-attribute'>
                    Composure: <span>${secondaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Concentration: <span>${primaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Decisions: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Determination: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Flair: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Leadership: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Off The Ball: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='primary-attribute'>
                    Positioning: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Teamwork: <span>${personalityAttributes()}</span>
                </p>
                <p>
                    Vision: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Work Rate: <span>${personalityAttributes()}</span>
                </p>
            </div>
        
            <div class='physical'>
                <h3>Physical</h3>
                <p>
                    Acceleration: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Agility: <span>${tertiaryAttribute()}</span>
                </p>
                <p>
                    Balance: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Jumping Reach: <span>0</span>
                </p>
                <p>
                    Natural Fitness: <span>${fitnessAttributes()}</span>
                </p>
                <p class='primary-attribute'>
                    Pace: <span>${primaryAttribute()}</span>
                </p>
                <p>
                    Stamina: <span>${tertiaryAttribute()}</span>
                </p>
                <p class='secondary-attribute'>
                    Strength: <span>${secondaryAttribute()}</span>
                </p>
            </div>
        </div>
    `;
};

// This section populates the normal player attributes based on the Dropdown selection 
const roleList = document.getElementById("role-list");

function dropdownChoice() {
    const roleListValue = roleList.options[roleList.selectedIndex].value;
    // const roleListText = roleList.options[roleList.selectedIndex].text;
    if (roleListValue === "af-a") {
        dropChoiceEle.style.display = 'inline-block';
        advForAtt();
    }    
    else if (roleListValue === "am-a") {
        dropChoiceEle.style.display = 'inline-block';
        attMidAtt();
    }
    else if (roleListValue === "am-s") {
        dropChoiceEle.style.display = 'inline-block';
        attMidSup();
    }
    else if (roleListValue === "anc-d") {
        dropChoiceEle.style.display = 'inline-block';
        ancManDef();
    }
    else if (roleListValue === "ap-a") {
        dropChoiceEle.style.display = 'inline-block';
        advPlaAtt();
    }
    else if (roleListValue === "ap-s") {
        dropChoiceEle.style.display = 'inline-block';
        advPlaSup();
    }
    else if (roleListValue === "b2b-s") {
        dropChoiceEle.style.display = 'inline-block';
        boxBoxSup();
    }
    else if (roleListValue === "bpd-c") {
        dropChoiceEle.style.display = 'inline-block';
        BaPlDeCov();
    }
    else if (roleListValue === "bpd-d") {
        dropChoiceEle.style.display = 'inline-block';
        BaPlDeDef();
    }
    else if (roleListValue === "bpd-s") {
        dropChoiceEle.style.display = 'inline-block';
        BaPlDeSto();
    }
    else if (roleListValue === "bwm-d") {
        dropChoiceEle.style.display = 'inline-block';
        balWinDef();
    }
    else if (roleListValue === "bwm-s") {
        dropChoiceEle.style.display = 'inline-block';
        balWinSup();
    }
    else if (roleListValue === "car-s") {
        dropChoiceEle.style.display = 'inline-block';
        carrilSup();
    }
    else if (roleListValue === "cd-c") {
        dropChoiceEle.style.display = 'inline-block';
        cenDefCov();
    }
    else {
        dropChoiceEle.style.display = 'none';
    }
    /*
    document.getElementById("dropdown-choice").innerHTML = `
      <p>The selected Value is: ${roleListValue}</p><br>
      <p>The selected Text is: ${roleListText}</p>
    `;
    */
};

roleList.addEventListener("change", dropdownChoice());