import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupRequest } from '../shared/group.model';
import { GroupService } from '../shared/group.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {

  groupId!:number;

  constructor(private groupService:GroupService, private router:Router) { }

  ngOnInit(): void {
    this.groupId = Number.parseInt(this.router.url.split("/")[3]);
    this.groupService.get(this.groupId).subscribe((data)=>{
      console.log(data);
      
    });
  }

  edit(group: any) {
    let groupreq = new GroupRequest();
    groupreq.nombre = group['nombre'];
    groupreq.tema = group['tema'];
    groupreq.descripcion = group['descripcion'];
    groupreq.usuario_id = group['usuario_id'];
    groupreq.curso_id = group['curso_id'];
    
    this.groupService.edit(this.groupId, groupreq).subscribe(()=>{
      this.groupService.getAllPageable().subscribe();
      this.router.navigate(['admin/groups']);
    });
  }

}
