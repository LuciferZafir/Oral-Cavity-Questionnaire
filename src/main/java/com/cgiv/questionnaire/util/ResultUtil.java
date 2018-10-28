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

        result.setStatus(0);
        result.setMsg("success");
        result.setData(object);

        return result;
    }

    public static Result success() {
        return success(null);
    }

    public static Result error() {
        Result result = new Result();

        result.setStatus(1);
        result.setMsg("failure");
        result.setData(null);

        return result;
    }
}
