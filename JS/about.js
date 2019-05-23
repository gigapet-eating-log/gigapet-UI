class GitHub {
    constructor(ahref) {
        this.ahref = ahref;
        this.ahref.style.color = 'black';
        this.ahref.addEventListener('mouseenter', () => this.turnPurple());
        this.ahref.addEventListener('mouseleave', () => this.turnBack());
    }

    turnPurple() {
        this.ahref.style.color = '#4F1271';
    }

    turnBack() {
        this.ahref.style.color = 'black';
    }
}

let gitHub = document.querySelectorAll('.card a');
gitHub.forEach(e => new GitHub(e));