export class SoftSkillsModel {
    public ID:number;
    public SkillName:string;
    public SkillValue:number;    
    constructor(id,name,value){
        console.log(id,name,value);
        this.ID = id;
        this.SkillName = name;
        this.SkillValue = value;
        
    }

 }