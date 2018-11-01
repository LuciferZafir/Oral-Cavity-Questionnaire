package com.cgiv.questionnaire.util;

import com.cgiv.questionnaire.entity.Result;

/**
 * @Author: ZhangKe
 * @Description:
 * @Date: 2018/10/27 20:19
 */
public class ResultUtil {

    public static Result success(Object object) {
        Result result = new Result();

        result.setStatus(200);
        result.setMsg("success");
        result.setData(object);

        return result;
    }

    public static Result success() {
        return success(null);
    }

    public static Result error(int status, String msg, Object object) {
        Result result = new Result();

        result.setStatus(status);
        result.setMsg(msg);
        result.setData(object);

        return result;
    }

    public static Result error(String msg) {
        return error(500, msg, null);
    }

    public static Result error(Object object) {
        return error(500, "failure", object);
    }

    public static Result error() {
        return error("failure");
    }
}
