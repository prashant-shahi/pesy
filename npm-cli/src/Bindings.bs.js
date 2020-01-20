// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Sys = require("bs-platform/lib/js/sys.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_sys = require("bs-platform/lib/js/caml_sys.js");
var Filename = require("bs-platform/lib/js/filename.js");
var Fs = require("../stubs/fs");
var Child_process = require("child_process");
var FsJs = require("../stubs/fs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var DownloadGitRepo = require("download-git-repo");
var Caml_chrome_debugger = require("bs-platform/lib/js/caml_chrome_debugger.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");
var HandlePromiseRejectionInJsJs = require("../stubs/handle-promise-rejection-in-js.js");

var $$Error = { };

var scriptPath = (process.argv[1]);

function downloadGit(repo, path) {
  return new Promise((function (resolve, param) {
                DownloadGitRepo(repo, path, (function (err) {
                        if (err == null) {
                          return resolve(/* Ok */Caml_chrome_debugger.variant("Ok", 0, [/* () */0]));
                        } else {
                          return resolve(/* Error */Caml_chrome_debugger.variant("Error", 1, [err]));
                        }
                      }));
                return /* () */0;
              }));
}

var ExecFailure = Caml_exceptions.create("Bindings-PesyBootstrapper.ChildProcess.ExecFailure");

var Options = { };

function exec(cmd, options) {
  return new Promise((function (resolve, reject) {
                Child_process.exec(cmd, options, (function (err, stdout, stderr) {
                        if (err == null) {
                          return resolve(/* Ok */Caml_chrome_debugger.variant("Ok", 0, [/* tuple */[
                                          cmd,
                                          stdout,
                                          stderr
                                        ]]));
                        } else {
                          return resolve(/* Error */Caml_chrome_debugger.variant("Error", 1, [/* tuple */[
                                          cmd,
                                          stdout,
                                          stderr
                                        ]]));
                        }
                      }));
                return /* () */0;
              }));
}

var ChildProcess = {
  ExecFailure: ExecFailure,
  Options: Options,
  exec: exec
};

var Process = { };

function ofString(prim) {
  return Buffer.from(prim);
}

var $$Buffer$1 = {
  ofString: ofString
};

var writeFile = FsJs.writeFile;

var readFile = FsJs.readFile;

function copy(dryRun, src, dest, param) {
  var dryRun$1 = dryRun !== undefined ? dryRun : false;
  if (dryRun$1) {
    return Promise.resolve((console.log("Copying " + (String(src) + (" to " + (String(dest) + "")))), /* () */0));
  } else {
    return readFile(src).then((function (b) {
                  return writeFile(dest, b);
                }));
  }
}

var DirEnt = { };

var Dir = { };

function opendir(prim) {
  return Fs.opendir(prim);
}

function readdir(prim) {
  return Fs.readdir(prim);
}

var Stats = { };

function stat(prim) {
  return Fs.stat(prim);
}

function isDirectory(p) {
  return Fs.stat(p).then((function (stats) {
                return stats.isDirectory();
              }));
}

function exists(prim) {
  return FsJs.exists(prim);
}

function mkdir$prime(prim) {
  return FsJs.mkdir(prim);
}

function mkdir(dryRun, p, path) {
  var forceCreate = p !== undefined ? p : false;
  var dryRun$1 = dryRun !== undefined ? dryRun : false;
  if (dryRun$1) {
    return Promise.resolve(/* () */0);
  } else if (forceCreate) {
    return FsJs.exists(path).then((function (doesExist) {
                  if (doesExist) {
                    return Promise.resolve(/* () */0);
                  } else {
                    var homePath = Caml_sys.caml_sys_getenv(Sys.unix ? "HOME" : "USERPROFILE");
                    if (path === homePath) {
                      return Promise.reject([
                                  Caml_builtin_exceptions.failure,
                                  "mkdir(~p=true) received home path and it was not found"
                                ]);
                    } else {
                      return mkdir(undefined, true, Curry._1(Filename.dirname, path)).then((function (param) {
                                    return FsJs.mkdir(path);
                                  }));
                    }
                  }
                }));
  } else {
    return FsJs.mkdir(path);
  }
}

var Fs$1 = {
  writeFile: writeFile,
  readFile: readFile,
  copy: copy,
  DirEnt: DirEnt,
  Dir: Dir,
  opendir: opendir,
  readdir: readdir,
  Stats: Stats,
  stat: stat,
  isDirectory: isDirectory,
  exists: exists,
  mkdir$prime: mkdir$prime,
  mkdir: mkdir
};

var throwJSError = (e => { throw e; });

function handlePromiseRejectInJS(prim) {
  return HandlePromiseRejectionInJsJs(prim);
}

var Chalk = { };

var Path = { };

exports.$$Error = $$Error;
exports.scriptPath = scriptPath;
exports.downloadGit = downloadGit;
exports.ChildProcess = ChildProcess;
exports.Process = Process;
exports.$$Buffer = $$Buffer$1;
exports.Fs = Fs$1;
exports.throwJSError = throwJSError;
exports.handlePromiseRejectInJS = handlePromiseRejectInJS;
exports.Chalk = Chalk;
exports.Path = Path;
/* scriptPath Not a pure module */
