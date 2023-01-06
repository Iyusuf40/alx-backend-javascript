var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="Teacher.ts" />
var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject() {
        }
        Object.defineProperty(Subject.prototype, "setTeacher", {
            set: function (teacher) {
                this.teacher = teacher;
            },
            enumerable: false,
            configurable: true
        });
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
var Subjects;
(function (Subjects) {
    var Cpp = /** @class */ (function (_super) {
        __extends(Cpp, _super);
        function Cpp(teacher) {
            var _this = _super.call(this) || this;
            _this.teacher = teacher;
            return _this;
        }
        Object.defineProperty(Cpp.prototype, "setTeacher", {
            set: function (teacher) {
                this.teacher = teacher;
            },
            enumerable: false,
            configurable: true
        });
        Cpp.prototype.getRequirements = function () {
            return "Here is the list of requirements for Cpp";
        };
        Cpp.prototype.getAvailableTeacher = function () {
            if (!this.teacher.experienceTeachingC) {
                return "No available teacher";
            }
            return "Available Teacher: " + this.teacher.firstName;
        };
        return Cpp;
    }(Subjects.Subject));
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
var Subjects;
(function (Subjects) {
    var React = /** @class */ (function (_super) {
        __extends(React, _super);
        function React(teacher) {
            var _this = _super.call(this) || this;
            _this.teacher = teacher;
            return _this;
        }
        Object.defineProperty(React.prototype, "setTeacher", {
            set: function (teacher) {
                this.teacher = teacher;
            },
            enumerable: false,
            configurable: true
        });
        React.prototype.getRequirements = function () {
            return "Here is the list of requirements for React";
        };
        React.prototype.getAvailableTeacher = function () {
            if (!this.teacher.experienceTeachingReact) {
                return "No available teacher";
            }
            return "Available Teacher: " + this.teacher.firstName;
        };
        return React;
    }(Subjects.Subject));
    Subjects.React = React;
})(Subjects || (Subjects = {}));
/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />
var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function (_super) {
        __extends(Java, _super);
        function Java(teacher) {
            var _this = _super.call(this) || this;
            _this.teacher = teacher;
            return _this;
        }
        Object.defineProperty(Java.prototype, "setTeacher", {
            set: function (teacher) {
                this.teacher = teacher;
            },
            enumerable: false,
            configurable: true
        });
        Java.prototype.getRequirements = function () {
            return "Here is the list of requirements for Java";
        };
        Java.prototype.getAvailableTeacher = function () {
            if (!this.teacher.experienceTeachingJava) {
                return "No available teacher";
            }
            return "Available Teacher: " + this.teacher.firstName;
        };
        return Java;
    }(Subjects.Subject));
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />
/**
 * NOTE: compile with tsc with the --outFile flag
 * eg tsc --outFile test.js js/main.ts
 */
var cTeacher = {
    firstName: "Val",
    lastName: "Maduagwu",
    experienceTeachingC: 10
};
var cpp = new Subjects.Cpp(cTeacher);
var react = new Subjects.React(cTeacher);
var java = new Subjects.Java(cTeacher);
console.log("C++");
console.log(cpp.getRequirements(), "\n", cpp.getAvailableTeacher());
console.log("Java");
console.log(java.getRequirements(), "\n", java.getAvailableTeacher());
console.log("React");
console.log(react.getRequirements(), "\n", react.getAvailableTeacher());
