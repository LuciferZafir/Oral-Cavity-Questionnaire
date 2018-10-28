package com.cgiv.questionnaire.dao;

import com.cgiv.questionnaire.entity.Investigator;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Service;

@Service
@Mapper
public interface InvestigatorMapper {
    int deleteByPrimaryKey(Long id);

    int insert(Investigator record);

    int insertSelective(Investigator record);

    Investigator selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Investigator record);

    int updateByPrimaryKey(Investigator record);
}