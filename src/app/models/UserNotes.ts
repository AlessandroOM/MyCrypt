export class UserNotes {
    Id! : string;
    IdUser! : string;
    Title! : string;
    Note!  : string;
    CreatedAt! : Date;
    UpdatedAt! : Date;

    constructor() {
        this.Id = "";
        this.IdUser = "";
        this.Title = "";
        this.Note = "";
        this.CreatedAt = new Date();
        this.UpdatedAt = new Date();
    }

}