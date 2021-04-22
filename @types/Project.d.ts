/**
 * 研究生培养命名空间
 */
namespace PT {
  /**
   * 项目类型
   */
  type Project = {
    id: string;
    name: string;
    enterprise: string;
    enterpriseTeacher: string;
    invest: number;
    needStudent: number;
    createTime: number;
    startTime: number;
    endTime: number;
    state: string;
    major: string;
    schoolTeacher: string[];
  };
}
