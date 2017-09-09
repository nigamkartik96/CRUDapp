app.factory("crudfactory",function(){
						var crudOperations = {
						noteList:[],
						id:1,
						add:function(desc,author){
							var note = new Note(this.id,desc,author);
							this.noteList.push(note);
							this.id ++;
						},
						getList:function(){
							return this.noteList;
						},
						getId:function(){
							return this.id;
						},
						idShift:function(){
							var k = 1;
							for(var i = 0; i < this.noteList.length; i++){
								if(k == this.noteList[i].id){
									k ++;
								}
							}
							this.id = k;
						},
						delete1:function(numberSelected){
							var e=[];
							for(var i = 0; i < this.noteList.length; i++){
								if(!this.noteList[i].mark){
									e.push(this.noteList[i]);
								}
								else{
									this.id--;
									numberSelected--;
								}
							}
							this.noteList = e;
							return numberSelected;
						},
						countSelected:function(){
							var c = 0;
							for(var i =0; i<this.noteList.length; i++)
								if(this.noteList[i].mark)
									c++;
							return c;
						}
						}
						return crudOperations;
						});

function Note(id,desc,author){
	this.id = id;
	this.desc = desc;
	this.author = author;
	this.mark = false;
	this.toggle = function(){
		this.mark = !this.mark;
	}
}