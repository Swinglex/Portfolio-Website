class Skills {
    constructor(skill){
        this.skill = skill;
    }

    skillListItem() {
        let listItem = this.lineThing(this.skill);
        return listItem;
    }

    lineThing(text) {
        let listItem = document.createElement('li');
        listItem.innerText = text;
      return listItem;
    }
}

fetch("../skills.json")
    .then(response => response.json())
    .then(skillsData => {
        if (skillsData && Array.isArray(skillsData.skills)) {
            let skills = [];
            for (let skill of skillsData.skills) {
                skills.push(new Skills(skill.skill));
            }

            let skillList = document.getElementById('SkillList');

            skills.forEach(skill => {
                let listItem = skill.skillListItem();
                skillList.appendChild(listItem);
            });
        } else {
            console.log('Invalid skills data');
        }
    })
    .catch(error => console.log('Error reading skills.json', error));




