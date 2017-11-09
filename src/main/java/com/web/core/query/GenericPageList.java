package com.web.core.query;

import java.util.Map;

import com.web.core.dao.IGenericDAO;
import com.web.core.query.support.IQuery;
import com.web.core.query.support.IQueryObject;

/**
 * 
 * <p>
 * Title: GenericPageList.java
 * </p>
 * 
 * <p>
 * Description: 面向对象分页类，该类用来进行数据查询并分页返回数据信息
 * </p>
 * 
 * 
 * @author erikzhang
 * 
 * @date 2014-4-24
 * 
 * @version xpshop v2.0 2015版 
 */
public class GenericPageList extends PageList {
	/**
	 * 
	 */
	private static final long serialVersionUID = 6730593239674387757L;
	protected String construct;

	protected String scope;

	protected Class cls;

	public GenericPageList(Class cls, IQueryObject queryObject, IGenericDAO dao) {
		this(cls, queryObject.getConstruct(), queryObject.getQuery(),
				queryObject.getParameters(), dao);
	}

	/**
	 * 构造分页信息
	 * 
	 * @param cls
	 *            对应的实体类
	 * @param construct
	 *            查询构造函数，为空是查询所有字段，格式为 new Goods(id,goodsName)
	 * @param scope
	 *            查询条件
	 * @param paras
	 *            查询参数，采用占位符管理
	 * @param dao
	 *            对应的dao
	 */
	public GenericPageList(Class cls, String construct, String scope,
			Map paras, IGenericDAO dao) {
		this.cls = cls;
		this.scope = scope;
		this.construct = construct;
		IQuery query = new GenericQuery(dao);
		query.setParaValues(paras);
		this.setQuery(query);
	}

	/**
	 * 查询
	 * 
	 * @param currentPage
	 *            当前页数
	 * @param pageSize
	 *            一页的查询个数
	 */
	public void doList(int currentPage, int pageSize) {
		String totalSql = "select COUNT(obj.id) from " + cls.getName()
				+ " obj where " + scope;
		super.doList(pageSize, currentPage, totalSql, construct, scope);
	}
}
