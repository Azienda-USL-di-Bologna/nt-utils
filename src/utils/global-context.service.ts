import { Injectable } from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

export type SubjectSharedObject = {
    [key: string]: Subject<any>;
};

export type SharedObject = {
    [key: string]: any;
};

@Injectable()
export class GlobalContextService {

    private _innerSharedObject: SharedObject = {};

    private _subjectSharedObject: SubjectSharedObject = {};

    public getInnerSharedObject(name: string): any {
        return this._innerSharedObject[name];
    }

    public getSubjectInnerSharedObject(name: string): Observable<any> {
        if (!this._subjectSharedObject[name]) {
            this._subjectSharedObject[name] = new BehaviorSubject(null);
        }
        return this._subjectSharedObject[name].asObservable();
    }

    public setSubjectInnerSharedObject(name: string, innerSharedObject: any): void {
        if (!this._subjectSharedObject[name]) {
            this._subjectSharedObject[name] = new BehaviorSubject(null);
        }
        this._subjectSharedObject[name].next(innerSharedObject);
    }

    public setInnerSharedObject(name: string, innerSharedObject: any): void {
        if (!this._innerSharedObject) {
            this._innerSharedObject[name] = {};
        }
        this._innerSharedObject[name] = innerSharedObject;
    }

}
