package com.cgiv.questionnaire.entity;

/**
 * @Author: ZhangKe
 * @Description:
 * @Date: 2018/10/27 20:20
 */
public class Result<T> {

    private int status;

    private String msg;

    private T data;

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
