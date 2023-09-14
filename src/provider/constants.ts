export const Login = "login";
export const Users = "users";
export const Sales = "sales";
export const Setting = "setting";
export const JsonFormatter = "jsonformatter";
export const TableSampleData = "tablesampledata";
export const Home = "home";

export const Dashboard = "admin/dashboard";
export const ManageStudent = 'admin/managestudent';
export const Student = 'admin/student';
export const Shift = 'admin/shift';
export const ShiftDetails = 'admin/shiftdetail';
export const MasterData = 'admin/master';

export const LiveUrl = "liveurl";
export const ApiKey = "AIzaSyAkFANPvmh1x_ajxADulhWiPcsNJHqw1Hs";
export const AccessTokenExpiredOn = "access_token_expired_on";
export const ProjectName = "onlinedatabuilder";
export const ServerError = 500;
export const BadRequest = 400;
export const Success = 200;
export const UnAuthorize = 401;
export const NotFound = 404;
export const Forbidden = 403;
export const AccessToken = ProjectName + "_access_token";
export const Authorization = "Authorization";
export const Master = ProjectName + "_master";
export const UserDetailName = ProjectName + "_UserDetail";
export const DocumentPathName = "documents";
export const UserPathName = "User";
export const ProfileImage = "profile";
export const InsertOrUpdateSuccessfull = "Inserted/Updated successfully";

export enum FileSystemType {
  User = 1,
  Bills = 2
}

// *************************** file name constancts  *************
export const Doc = "doc";
export const Docx = "docx";
export const ADocx = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
export const Pdf = "pdf";
export const APdf = "application/pdf";
export const Txt = "txt";
export const FlatFile = "file";
export const Zip = "zip";
export const Excel = "xlsx";
export const Ppt = "ppt";
export const Directory = "";
export const JImage = 'jpg';
export const PImage = 'png';
export const AImage = "jpeg";

export const DocImg = "assets/ext/doc.png";
export const PdfImg = "assets/ext/pdf.png";
export const TxtImg = "assets/ext/txt.png";
export const FlatFileImg = "assets/ext/file.png";
export const ZipImg = "assets/ext/zip.jpg";
export const ExcelImg = "assets/ext/excel.png";
export const PptImg = "assets/ext/ppt.jpg";
export const DirectoryImg = "assets/ext/directory.jpg";
export const Images = "assets/ext/image.png";
export const DocumentPath = "Documents";
export const UserPath = "User";
export const UserImage = "assets/images/face.jpg";
export const OrgLogo = "assets/images/organization-logo.jpg"


export class API {
  public static GETEMPLOYEEBYFILTER: string = "employee/GetEmployees";
}


export const MaxAllowedFileSize = 2048

export enum UserType {
  Admin = 1,
  Employee = 2,
  Candidate = 3,
  Client = 4,
  Other = 5,
  Compnay = 6
}

export enum ItemStatus
{
  NotSubmitted = 0,
  Completed = 1,
  Pending = 2,
  Canceled = 3,
  NotGenerated = 4,
  Rejected = 5,
  Generated = 6,
  Raised = 7,
  Submitted = 8,
  Approved = 9,
  Present = 10,
  Absent = 11,
  MissingAttendanceRequest = 12,
  Saved = 13,
  AutoPromoted = 14,
  FinalLevel = 15
}

class FileRoleType
{
    PrimaryLogo = "Company Primary Logo";
    CompanyLogo = "Company Logo";
    OtherFile = "Other File";
}

export enum CommonFlags
{
  FullDay = 1,
  FirstHalf = 2,
  SecondHalf = 3,
  HalfDay = 4
}
