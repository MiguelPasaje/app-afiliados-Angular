import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Afiliado } from '../interfaces/afiliado.interface';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AfiliadosService {
  URL: string = 'http://localhost:9005/api/Afiliados';

  private afiliadosSubject: BehaviorSubject<Afiliado[]> = new BehaviorSubject<Afiliado[]>([]);
  public afiliados$: Observable<Afiliado[]> =
    this.afiliadosSubject.asObservable();

  constructor(private http: HttpClient) {}

  crearAfiliado(afiliado: Afiliado): Observable<Afiliado> {
    return this.http.post<Afiliado>(this.URL, afiliado).pipe(map(res=>res));
  }

  listarAfiliados(): Observable<Afiliado[]> {
    return this.http.get<Afiliado[]>(this.URL).pipe(map(res=>res));
  }

  actualizarAfiliados(id: number, request: FormGroup): Observable<Afiliado> {
    return this.http.put<Afiliado>(`${this.URL}/${id}`, request).pipe(map(res=>res));
  }

  //actualiza la lista de afiliados al crear o editar
  actualizarListaAfiliados(): void {
    this.listarAfiliados().subscribe((afiliados) => {
      this.afiliadosSubject.next(afiliados);
    });
  }

  eliminarAfiliado(id: number) {
    return this.http.delete<Afiliado>(`${this.URL}/${id}`).pipe(map((res) => res));
  }
}
